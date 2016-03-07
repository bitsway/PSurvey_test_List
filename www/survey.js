function getLocation() {
	
	var options = { enableHighAccuracy: false};
	navigator.geolocation.getCurrentPosition(onSuccess, onError , options);	
}

// onSuccess Geolocation
function onSuccess(position) {
	alert (position.coords.latitude);
	alert (position.coords.longitude);
	
}

// onError Callback receives a PositionError object
function onError(error) {
   alert ('Failed');
}						
//========================= Longin: Check user

function check_user() {
	
	
	var cid=$("#cid").val().toUpperCase();
	cid=$.trim(cid);
	

	
	//Main

	//
//	//var  apipath_base_photo_dm='http://c003.cloudapp.net/mrepacme/syncmobile_prescription/dm_prescription_path?CID='+cid +'&HTTPPASS=e99business321cba'
	//var  apipath_base_photo_dm='http://127.0.0.1:8000/mrepbiopharma/syncmobile_prescription/dm_prescription_path?CID='+cid +'&HTTPPASS=e99business321cba'
//	
//	
	var apipath_base_photo_dm ='http://e2.businesssolutionapps.com/welcome/dmpath_prescription/get_path?CID='+cid +'&HTTPPASS=e99business321cba';
	
	
	var user_id=$("#user_id").val();
	var user_pass=$("#user_pass").val();
	
	user_id=$.trim(user_id);
	
	
	//-----
	
	if (user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		//alert ('NNNN');
		//url = "#login";      
		//$.mobile.navigate(url);
		$("#error_login").html("Required User ID and Password");	
	}else{
		//-----------------
		localStorage.base_url='';
	    localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		//alert(apipath_base_photo_dm);
		//$("#loginButton").hide();
		//$("#wait_image_login").show();
		
		//$("#error_login").html(apipath_base_photo_dm);
		$.post(apipath_base_photo_dm,{ },
    	function(data, status){
			if (status=='success'){
				localStorage.base_url='';
				
				var dtaStr=data.replace('<start>','').replace('<end>','')
				var resultArray = data.split('<fd>');		
					if(resultArray.length==3){
						base_url=resultArray[0];
						photo_url=resultArray[1];
						photo_submit_url=resultArray[2];
						alert (base_url)
						//-------------
						if(base_url=='' || photo_url==''){	
							$("#wait_image_login").hide();
							$("#loginButton").show();
							$("#error_login").html('Base URL not available');	
						}else{
							//--------------------------
							
							localStorage.base_url=base_url;
							localStorage.photo_url=photo_url;
							localStorage.photo_submit_url=photo_submit_url;
							
							localStorage.cid=cid;
							localStorage.user_id=user_id;
							localStorage.user_pass=user_pass;   		
							localStorage.synced='NO'
							$.afui.loadContent("#imagePage",true,true,"up");
						}
					}
			}
			else{
				$("#wait_image_login").hide();
				$("#loginButton").show();
				$("#error_login").html('Base URL not available');
			}
     
    });
////		//----
//		$.ajax({
//			 type: 'POST',
//			 url: apipath_base_photo_dm,
//			 success: function(result) {	
//			 	alert (result)
//				if (result==''){
//					$("#wait_image_login").hide();
//					$("#loginButton").show();
//					$("#error_login").html('Base URL not available');						
//				}else{
//					
//					
//					//Clear local storage arte login hit start
//						base_url='';
//						photo_url='';
//					
//						localStorage.base_url='';
//						localStorage.photo_url='';
//						localStorage.photo_submit_url='';
//						
//				
//						localStorage.marketListStr='';
//						localStorage.productListStr='';
//
//						localStorage.distributorListStr='';	
//				
//						
//						localStorage.client_string=''	;
//						localStorage.visit_client='';
//						
//
//						localStorage.visitMarketStr='';
//						localStorage.visit_distributor_nameid=''
//
//						
//							
//						localStorage.product_tbl_str='';
//
//						
//						localStorage.plan_market='';
//						localStorage.plan_date='';
//						
//						localStorage.m_plan_client_string='';
//						localStorage.plan_ret_name='';
//						
//						localStorage.marketInfoStr='';
//						localStorage.marketInfoSubmitStr='';
//						localStorage.productOrderStr='';
//						
//						localStorage.visit_plan_marketlist_combo='';
//						localStorage.visit_plan_client_cmb_list='';
//						
//						localStorage.market_cmb_list_cp='';
//						localStorage.unschedule_market_cmb_id='';
//						
//						
//						//----------
//						localStorage.campaign_string=''	;
//						localStorage.visit_camp_list_str='';
//						localStorage.visit_camp_submit_str='';
//						//------
//						
//						localStorage.visit_page="";
//						
//						localStorage.region_string="";
//						
//						
//						localStorage.productGiftStr='';
//						localStorage.campaign_doc_str=''
//						localStorage.productSampleStr=''
//						
//						
//						
//						localStorage.market_client='';
//						
//						
//						localStorage.menu='';						
//						localStorage.user_type='';
//						localStorage.market_doctor='';
//						
//						
//						localStorage.campaign_show_1='';
//					
//
//					//Clear local storage arte login hit end
//
//					var startIndex=result.indexOf('<start>');
//					var endIndex=result.indexOf('<end>');
//					
//					var urlResult=result.substring(startIndex+7,endIndex);
//					
//					var resultArray = urlResult.split('<fd>');		
//					if(resultArray.length==3){
//						base_url=resultArray[0];
//						photo_url=resultArray[1];
//						photo_submit_url=resultArray[2];
//						
//						//-------------
//						if(base_url=='' || photo_url==''){	
//							$("#wait_image_login").hide();
//							$("#loginButton").show();
//							$("#error_login").html('Base URL not available');	
//						}else{
//							//--------------------------
//							clear_autho();
//							$("#error_login").html("");		
//							$("#loginButton").hide();
//							$("#wait_image_login").show();
//							
//							localStorage.base_url=base_url;
//							localStorage.photo_url=photo_url;
//							localStorage.photo_submit_url=photo_submit_url;
//							
//							localStorage.cid=cid;
//							localStorage.user_id=user_id;
//							localStorage.user_pass=user_pass;   		
//							localStorage.synced='NO'
//							alert ('BBBBBB')
////							//$("#error_login").html(localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
////						//	http://127.0.0.1:8000/lscmreporting/syncmobile/check_user?cid=LSCRM&rep_id=1001&rep_pass=123&synccode=
////							
//							$.ajax({
//									 type: 'POST',
//									 url: localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,
//									 success: function(result) {
//											//alert ("nnnnnnn");
//											if (result==''){
//												$("#wait_image_login").hide();
//												$("#loginButton").show();
//												$("#error_login").html('Sorry Network not available');
//												
//											}else{							
//												var resultArray = result.split('<SYNCDATA>');			
//												if (resultArray[0]=='FAILED'){
//													$("#wait_image_login").hide();
//													$("#loginButton").show();								
//													$("#error_login").html(resultArray[1]);
////													
////												}else if (resultArray[0]=='SUCCESS'){
////													
////													localStorage.synccode=resultArray[1];
////													
////													localStorage.marketListStr=resultArray[2];
////													//alert (resultArray[2]);
////													localStorage.productListStr=resultArray[3];
////													//localStorage.marchandizingItem=resultArray[4];
////													localStorage.distributorListStr=resultArray[5];								
////													localStorage.brand_list_string=resultArray[6];
////													
////													localStorage.complain_type_string=resultArray[7];
////													localStorage.complain_from_string=resultArray[8];
////												//	localStorage.task_type_string=resultArray[9];
////													region_string=resultArray[10];
////												//	localStorage.gift_string=resultArray[11];
////												//	localStorage.clientCat_string=resultArray[12];
////													
////													localStorage.market_client=resultArray[13];
////													
////												//	localStorage.menu=resultArray[14];
////													
////												//	localStorage.ppm_string=resultArray[15];
////													
////													localStorage.user_type=resultArray[16];
////													
////													localStorage.market_doctor=resultArray[17];
////													//alert (localStorage.menu);
////
////													
////													
////													var productList=localStorage.productListStr.split('<rd>');
////													var productLength=productList.length;
////													
////													//------------ Order Item list								
////													
////													
////													//alert ('1')
////													
////												//	var product_tbl_doc_campaign='<ul id="campaign_combo_id_lv" data-role="listview"  data-filter="true" data-input="#campaign_combo_id" data-inset="true" data-filter-reveal="true" > ';
////												
////											//	var product_tbl_doc_campaign='<ul id="campaign_combo_id_lv" data-role="listview"  data-filter="true" data-input="#campaign_combo_id" > ';
//
//
////													var product_tbl_doc_campaign_z=''
////
////													for (j=0; j < productLength; j++){
////														var productArray2 = productList[j].split('<fd>');
////														var product_id2=productArray2[0];	
////														var product_name2=productArray2[1];
////														var product_price=productArray2[2];
////														
////														var product_qty='';																		
////
////
////														
////														if (product_name2.indexOf("A")==0){
////															product_tbl_doc_campaign_a=product_tbl_doc_campaign_a+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
////														}
////													
////													
////														$("#error_login").html('Processing Product List....');	
////														//-------------Sample----------
////													
////														
////													
////													}
////													
////													//product_tbl_doc_campaign=product_tbl_doc_campaign+'</ul>';//+'</table>'	//+'</ul>';						
////											localStorage.product_tbl_doc_campaign_a=product_tbl_doc_campaign_a;
//
//																			//$("#doctor_campaign_list_tbl").html(localStorage.product_tbl_str_doc_campaign);
////
////											//		$('#campaign_combo_id_lv').listview();
////													
////												
////													
////													
////												
////													
////													//------------- Visit Plan Market List / Client Profile Market List / Unschedule
////													var planMarketList = localStorage.marketListStr.split('<rd>');
////													var planMarketListShowLength=planMarketList.length	
////													
////													var visitPlanMarketComb=''								
////													var profileMarketComb='';								
////													var unscheduleMarketComb='';
////													
////													for (var k=0; k < planMarketListShowLength; k++){
////														var planMarketValueArray = planMarketList[k].split('<fd>');
////														planMarketID=planMarketValueArray[0];
////														planMarketName=planMarketValueArray[1];
////														marketID=planMarketID
////														marketName=planMarketName
////														var marketNameID=planMarketName+'|'+planMarketID;
////														//alert (marketNameID);
////														if(planMarketID!=''){
////															unscheduleMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';
////
////															}
////													}
////																				
////																	
////													localStorage.unschedule_market_cmb_id=unscheduleMarketComb;
////													
////
////													//---------------
////													$("#error_login").html('');
////													$("#wait_image_login").hide();
////													$("#loginButton").show();
////													
////													//----------------
////													localStorage.visit_page=""
////													
////													
////													$("#se_mpo").val(localStorage.user_id);
////
////													localStorage.synced='YES';
////													url = "#pageHome";
////													$.mobile.navigate(url);								
////													location.reload();
////													
////													set_doc_all();
////													
//												}else{
//													$("#wait_image_login").hide();
//													$("#loginButton").show();
//													$("#error_login").html('Network Timeout. Please try again.');							
//													}
//											}
//										  },
//									  error: function(result) {					 
//										  $("#wait_image_login").hide();
//										  $("#loginButton").show();
//										  $("#error_login").html('Network Timeout. Please try again.');
//										  $.afui.loadContent("#main",false,false,"up");
//										  
//										//  var url = "#login";
//										 // $.mobile.navigate(url);	
//									  }
//								  });//end ajax
//								}//base url check
//						//alert ('nadira');
//						//-------------		
//					}else{
//						$("#wait_image_login").hide();
//						$("#loginButton").show();
//						$("#error_login").html('Login Failed. Please Check CID, UserID, Password.');	
//					}
//					
//				}
//			  },
//			  error: function(result) {			  	   
//				 // alert ('nadira');
//				  $("#wait_image_login").hide();
//				  $("#loginButton").show();
//				  $("#error_login").html('Network  Timeout. Please Check Internet Connection');	
//				
//			  }
//		});//end ajax
		
		//alert(base_url+','+photo_url+'2');
		
		
		  }//end else	
	}//function







function getPrescriptionImage() {
	//navigator.camera.getPicture(onSuccessProfile, onFailProfile, { quality: 10,
		//destinationType: Camera.DestinationType.FILE_URI });
   alert ('Camera')
   navigator.camera.getPicture(onSuccessProfile, onFailProfile, { quality: 90,
		targetWidth: 400,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });
		
}
function onSuccessProfile(imageURI) {
	alert ('Success')
    //var image = document.getElementById('myImagePrescription');
//    image.src = imageURI;
//	imagePath = imageURI;
//	$("#prescriptionPhoto").val(imagePath);
}
function onFailProfile(message) {
	alert ('Fail')
	//imagePath="";
//    alert('Failed because: ' + message);
}

















