# just one

A Grist custom widget port of [cjquines/just-one](https://github.com/cjquines/just-one)
(MIT), a web app for the cooperative party word game
[Just One](https://boardgamegeek.com/boardgame/254640/just-one).

In each round one player is the guesser. Everyone else writes a single-word clue.
Clues that two or more people wrote are struck out, and the guesser only sees
what survives.

## What changed in the port

The original is an Express + socket.io server holding the room in memory, with a
React client. Here there is no server: the Grist document *is* the room.

| original | this widget |
|---|---|
| socket.io room state | rows in `Players`, `Rounds`, `Clues`, `Game` |
| `equivalent()` via the `compromise` NLP package | `Clues.Stem`, a Python formula |
| duplicate elimination in `startPhase("eliminate")` | `Clues.Auto-hidden` / `Clues.Visible`, Python formulas |
| running score counters | `Game.Correct` / `Game.Wrong`, Python formulas |
| socket broadcast on every change | `Game.Pulse`, a formula digesting every table, which the widget watches |
| the wordlist JSON files | the `Words` table |

`Game.Pulse` is the trick that removes the server. It is a formula on the one
table the widget is attached to, and it reads every other table, so any change
anywhere in the document changes `Pulse`, which Grist pushes to every open
browser. That is the whole realtime layer.

## Setup

The widget expects these tables:

- **Players** - `Name` (Text), `Seat` (Numeric)
- **Rounds** - `Num` (Int), `Guesser` (Ref:Players), `Word` (Text), `Guess` (Text),
  `Judgment` (Choice: correct/wrong), `Phase` (Choice: clue/eliminate/guess/judge/end)
- **Clues** - `Round` (Ref:Rounds), `Player` (Ref:Players), `Clue` (Text),
  `Override` (Bool), plus formulas `Norm`, `Dup`, `Visible`
- **Game** - one row: `Mode`, `WordList`, `CurrentRound` (Ref:Rounds), plus
  formulas `Correct`, `Wrong`, `Pulse`
- **Words** - `Word` (Text), `List` (Choice), `Used` (Bool)

Add it as a custom widget on a page, select **Game** as the table, and set access
to **Full document access**.

## A caveat worth knowing

The word is kept off the guesser's screen by this widget, not by the database.
Anyone can open the `Rounds` table and read it. That matches the original, which
"relies on the players to trust each other" - but unlike the original, Grist
could make it real: an access rule on `Rounds.Word` keyed to the guesser's
identity would hide it at the server.
