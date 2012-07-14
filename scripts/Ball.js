define([
  'dojo/_base/declare',
  'box2d/CircleEntity'
], function(declare, CircleEntity){

  return declare([CircleEntity], {
    constructor: function(/* Object */args){
      declare.safeMixin(this, args);
    },
    draw: function(ctx, scale){
      var radius = this.radius * scale;
      var sx = this.x * scale;
      var sy = this.y * scale;

      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(sx, sy, radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();

      if(this.id !== 0){
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(this.angle);
        ctx.translate(-sx, -sy);

        ctx.fillStyle = '#FFFFFF';
        ctx.font = "8pt Arial";
        var textXOffset;

        if(this.id < 10){
          textXOffset = sx - radius/2 + 3;
        }else{
          textXOffset = sx - radius/2;
        }

        ctx.fillText(this.id,textXOffset,sy - radius /2 + 10);

        if(this.striped){
          ctx.beginPath();
          ctx.arc(sx, sy, radius, Math.PI * 1.77, Math.PI * 1.22 , true);
          ctx.closePath();
          ctx.fill();

          ctx.beginPath();
          ctx.arc(sx, sy, radius, Math.PI * 0.77, Math.PI * 0.22 , true);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }

      ctx.strokeStyle = '#000000';
      ctx.beginPath();
      ctx.arc(sx, sy, radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.stroke();

    }
  });

});