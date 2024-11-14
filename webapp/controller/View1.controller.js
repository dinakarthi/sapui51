sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/Image",
    "sap/suite/ui/commons/library"
],
function (Controller,MessageToast,Image) {
    "use strict";

    return Controller.extend("sap.btp.sapui5.controller.View1", {
        onpress : function(){
            //MessageToast.show("Super");
  
      var input1 = this.getView().byId("i1").getValue();
      var input2 = this.getView().byId("i2").getValue();
      var oImage = this.getView().byId("im1");
      //var input2 = parseFloat(this.getView().byId("i2").getValue());
      if( input1 == 0 && input2 == 0 )
      {
        MessageToast.show("Enter Data");
        oImage.setSrc("/oh.gif");
        oImage.setVisible(true);
       }
       else
       {
        oImage.setSrc("/thumbsup.gif");
        oImage.setVisible(true);
         //oImage.setVisible(false);
        }
      // Perform addition
      var result = +input1 + +input2;
      // Display the result
        this.getView().byId("res").setValue(result);
            
        },
        onInit: function () {
            //onpress : function();
        }
    }); 
});
