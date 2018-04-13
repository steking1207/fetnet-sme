functionCTR = function(anelem,title,title2,title3) {
if(dcsMultiTrack) {
                     // with sdc1.js, sdc2.js script
                  dcsMultiTrack('DCS.dcsuri','/CTR.dat','DCSext.WTlayout_block','Promotion','DCSext.WTlayout_type', title,'DCSext.WTlayout_type2',title2,'DCSext.WTlayout_type3',title3 );

           }
           window['ctrlocation'] = anelem;
                    // with sdc1.js, sdc2.js script
                     gImages[gIndex-1].onload = function() {
						 //window.open(anelem)
                         window.location.href = window['ctrlocation'];    // 圖檔有傳回來，導過去
                     };


           // 2011-01-17 end use of timeout feature
           //setTimeout(function() {
           //    window.location.href = anelem;        // 10秒內如果webtrend沒回應，就還是導過去
           //}, 10000);
      };



