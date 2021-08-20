
function scaleBasedOnWindow(elm, scale=1, fit=false){
    if(!fit){
        elm.style.transform='scale('+scale/Math.min(elm.clientWidth/window.innerWidth,elm.clientHeight/window.innerHeight)+')';
    }else{
        elm.style.transform='scale('+scale/Math.max(elm.clientWidth/window.innerWidth,elm.clientHeight/window.innerHeight)+')';
    }
}

function setup(ctx, cvs, background, texts) {

  const img1 = new Image();

  img1.onload = function () {
    cvs.width = img1.width;
    cvs.height = img1.height;
    scaleBasedOnWindow(cvs, 1, true);
    ctx.drawImage(img1, 0, 0);
    const fontScale = cvs.width / 10.0;
    
    for (const text of texts) {
      const fontSetting = "bold " + Math.round(fontScale * text.Size / 100.0) + "px Impact";
      ctx.font = fontSetting;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";

      const input = text.Text;
      const box = ctx.measureText(input);
      const textWidth = box.width;
      const textHeight = box.actualBoundingBoxAscent + box.actualBoundingBoxDescent;


      const x0 = Math.round((img1.width) / 100.0 * text.Right);
      const y0 = Math.round((img1.height) / 100.0 * (100 - text.Up));
      ctx.fillText(input, x0, y0, textWidth + 50);
      ctx.fillStyle = "black";
      ctx.strokeText(input, x0, y0, textWidth + 50);
    }
  };

  img1.src = background;
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  const cvs = document.getElementById('show');

  grist.ready();
  grist.onRecord(function(record) {
    setup(cvs.getContext('2d'), cvs, record.Image, record.Texts);
  });
});

