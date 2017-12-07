/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${mask}", "click", function(sym, e) {
         EB.clickthrough();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // Sizmek function to check if Sizmek classes are initialized.
         //if initialized, call startAd else add listener
         function initEB(){
         if (!EB.isInitialized()) {
         EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
         }
         else {
         startAd();
         }
         }
         //called once Sizmek classes are initialized
         function startAd() {
         //any functions to run on load should go here
         //play the stage/animation
         sym.play();
         }
         //check if Sizmek is initialized
         initEB();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-605734651");