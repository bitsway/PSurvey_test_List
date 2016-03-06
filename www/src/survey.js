

var mobile_off_flag=0;
var url = "";
var base_url='';
var photo_url='';

var j = 0;
var i = 0;

function reload_function() {
	location.reload();
}
//-------GET GEO LOCATION
function getLocation() {
	$("#error_prescription_submit").html("Confirming location. Please wait.");
	//$("#btn_prescription_submit").show();
	var options = { enableHighAccuracy: false};
	navigator.geolocation.getCurrentPosition(onSuccess, onError , options);	
}

// onSuccess Geolocation
function onSuccess(position) {
	$("#lat").val(position.coords.latitude);
	$("#long").val(position.coords.longitude);
	$("#error_prescription_submit").html("Location Confirmed");
	$("#btn_prescription_submit").show();
	$("#btn_loc_submit").hide();
}

// onError Callback receives a PositionError object
function onError(error) {
   $("#lat").val(0);
   $("#long").val(0);
   $("#error_prescription_submit").html("Failed to Confirmed Location.");
   $("#btn_prescription_submit").show();
   $("#btn_loc_submit").hide();
  // $("#btn_prescription_submit").hide();
  // $("#btn_loc_submit").show();
}




// -------------- If Not synced, Show login
function first_page(){
	if ((localStorage.synced!='YES')){
		url = "#login";
		$.mobile.navigate(url);		
	}
	else{
		url = "#pageHome";
		$.mobile.navigate(url);		
	}
}

function set_doc_all(){
	 $(".docCampaign").attr('checked', false);
	 $('#campaign_combo_id').val('');
}
//================= Clear authorization
function clear_autho(){	
	var check_clear=$("input[name='clear_auth_check']:checked").val();
	
	if(check_clear!='Yes'){
		$("#error_login").html("Required Confirm Clear");			
	}else{
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		localStorage.cid='';
		localStorage.user_id='';
		localStorage.user_pass='';
		localStorage.synccode='';
		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.distributorListStr='';	
		localStorage.synced='';
		
		localStorage.client_string=''	;
		localStorage.visit_client='';
		localStorage.client_string='';
		localStorage.visitMarketStr='';
		localStorage.visit_distributor_nameid=''
		localStorage.product_tbl_str='';
		
		localStorage.product_tbl_del_str='';
		
		localStorage.distributor_name='';
		//localStorage.delivery_date='';
	//	localStorage.dis_client_string='';
		
		localStorage.plan_market='';
		localStorage.plan_date='';
		
		localStorage.m_plan_client_string='';
		localStorage.plan_ret_name='';
		
		localStorage.marketInfoStr='';
		localStorage.marketInfoSubmitStr='';
		localStorage.productOrderStr='';
		//localStorage.marchandizingInfoStr='';
		
		localStorage.visit_plan_marketlist_combo='';
		localStorage.visit_plan_client_cmb_list='';
		localStorage.delivery_distributor_cmb_list='';
		localStorage.delivery_retailer_cmb_list='';
		localStorage.market_cmb_list_cp='';
		localStorage.unschedule_market_cmb_id='';
		
		//localStorage.profile_m_client_org_id='';
		
		//----------
		localStorage.campaign_doc_str=''
		localStorage.campaign_string=''	;
		localStorage.visit_camp_list_str='';
		localStorage.visit_camp_submit_str='';
		//------
		localStorage.brand_list_string='';
		
		localStorage.visit_page="";
		
		localStorage.region_string="";
		
		localStorage.payment_mode="";
		
		
		localStorage.productGiftStr='';
		localStorage.campaign_doc_str=''
		localStorage.productSampleStr=''
		
		
		localStorage.productppmStr='';
		localStorage.campaign_show_1='';
		localStorage.productOrder_change=''
		localStorage.report_button='';
		
		
		localStorage.market_client=''
		localStorage.user_type='';
		
		localStorage.market_doctor='';
		
		

		
		url = "#login";
		$.mobile.navigate(url);	
		location.reload();
	}
}

function get_login() {
	var url = "#login";
	$.mobile.navigate(url);
	}

							
//========================= Longin: Check user
function check_user() {
	
	
	var cid=$("#cid").val().toUpperCase();
	cid=$.trim(cid);
	

	
	//Main

	
	//var  apipath_base_photo_dm='http://c003.cloudapp.net/mrepacme/syncmobile_prescription/dm_prescription_path?CID='+cid +'&HTTPPASS=e99business321cba'
	//var  apipath_base_photo_dm='http://127.0.0.1:8000/mrepbiopharma/syncmobile_prescription/dm_prescription_path?CID='+cid +'&HTTPPASS=e99business321cba'
	
	
  var apipath_base_photo_dm ='http://e2.businesssolutionapps.com/welcome/dmpath_prescription/get_path?CID='+cid +'&HTTPPASS=e99business321cba';
	
	
	var user_id=$("#user_id").val();
	var user_pass=$("#user_pass").val();
	
	user_id=$.trim(user_id);
	
	
	//-----
	
	if (user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		url = "#login";      
		$.mobile.navigate(url);
		$("#error_login").html("Required User ID and Password");	
	}else{
		//-----------------
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		//alert(apipath_base_photo_dm);
		$("#loginButton").hide();
		$("#wait_image_login").show();
		//alert (apipath_base_photo_dm);	
		//----
		$.ajax({
			 type: 'POST',
			 url: apipath_base_photo_dm,
			 success: function(result) {	
			 	
				if (result==''){
					$("#wait_image_login").hide();
					$("#loginButton").show();
					$("#error_login").html('Base URL not available');						
				}else{
					
					
					//Clear local storage arte login hit start
						base_url='';
						photo_url='';
					
						localStorage.base_url='';
						localStorage.photo_url='';
						localStorage.photo_submit_url='';
						
				
						localStorage.marketListStr='';
						localStorage.productListStr='';
						//localStorage.product_tbl_cart='';
						//localStorage.marchandizingItem='';
						localStorage.distributorListStr='';	
				
						
						localStorage.client_string=''	;
						localStorage.visit_client='';
						
						//localStorage.visit_type='';
						//localStorage.scheduled_date='';
						localStorage.visitMarketStr='';
						localStorage.visit_distributor_nameid=''
						localStorage.marchandizingStr='';
						localStorage.clientProfileStr='';
						
							
						localStorage.product_tbl_str='';
						
						localStorage.product_tbl_del_str='';
						
						localStorage.distributor_name='';
						localStorage.delivery_date='';
						localStorage.dis_client_string='';
						
						localStorage.plan_market='';
						localStorage.plan_date='';
						
						localStorage.m_plan_client_string='';
						localStorage.plan_ret_name='';
						
						localStorage.marketInfoStr='';
						localStorage.marketInfoSubmitStr='';
						localStorage.productOrderStr='';
						
						localStorage.visit_plan_marketlist_combo='';
						localStorage.visit_plan_client_cmb_list='';
						localStorage.delivery_distributor_cmb_list='';
						localStorage.delivery_retailer_cmb_list='';
						localStorage.market_cmb_list_cp='';
						localStorage.unschedule_market_cmb_id='';
						
						
						//----------
						localStorage.campaign_string=''	;
						localStorage.visit_camp_list_str='';
						localStorage.visit_camp_submit_str='';
						//------
						
						localStorage.visit_page="";
						
						localStorage.region_string="";
						
						
						localStorage.productGiftStr='';
						localStorage.campaign_doc_str=''
						localStorage.productSampleStr=''
						
						
						
						localStorage.market_client='';
						
						
						localStorage.menu='';
																	
						localStorage.ppm_string='';
						
						localStorage.user_type='';
						localStorage.market_doctor='';
						
						
						localStorage.campaign_show_1='';
					

					//Clear local storage arte login hit end

					var startIndex=result.indexOf('<start>');
					var endIndex=result.indexOf('<end>');
					
					var urlResult=result.substring(startIndex+7,endIndex);
					
					var resultArray = urlResult.split('<fd>');		
					if(resultArray.length==3){
						base_url=resultArray[0];
						photo_url=resultArray[1];
						photo_submit_url=resultArray[2];
						
						//-------------
						if(base_url=='' || photo_url==''){	
							$("#wait_image_login").hide();
							$("#loginButton").show();
							$("#error_login").html('Base URL not available');	
						}else{
							//--------------------------
							clear_autho();
							$("#error_login").html("");		
							$("#loginButton").hide();
							$("#wait_image_login").show();
							
							localStorage.base_url=base_url;
							localStorage.photo_url=photo_url;
							localStorage.photo_submit_url=photo_submit_url;
							
							localStorage.cid=cid;
							localStorage.user_id=user_id;
							localStorage.user_pass=user_pass;   		
							localStorage.synced='NO'
							
							//$("#error_login").html(localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
						//	http://127.0.0.1:8000/lscmreporting/syncmobile/check_user?cid=LSCRM&rep_id=1001&rep_pass=123&synccode=
							
							$.ajax({
									 type: 'POST',
									 url: localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,
									 success: function(result) {
											//alert ("nnnnnnn");
											if (result==''){
												$("#wait_image_login").hide();
												$("#loginButton").show();
												$("#error_login").html('Sorry Network not available');
												
											}else{							
												var resultArray = result.split('<SYNCDATA>');			
												if (resultArray[0]=='FAILED'){
													$("#wait_image_login").hide();
													$("#loginButton").show();								
													$("#error_login").html(resultArray[1]);
													
												}else if (resultArray[0]=='SUCCESS'){
													
													localStorage.synccode=resultArray[1];
													
													localStorage.marketListStr=resultArray[2];
													//alert (resultArray[2]);
													localStorage.productListStr=resultArray[3];
													//localStorage.marchandizingItem=resultArray[4];
													localStorage.distributorListStr=resultArray[5];								
													localStorage.brand_list_string=resultArray[6];
													
													localStorage.complain_type_string=resultArray[7];
													localStorage.complain_from_string=resultArray[8];
												//	localStorage.task_type_string=resultArray[9];
													region_string=resultArray[10];
												//	localStorage.gift_string=resultArray[11];
												//	localStorage.clientCat_string=resultArray[12];
													
													localStorage.market_client=resultArray[13];
													
												//	localStorage.menu=resultArray[14];
													
												//	localStorage.ppm_string=resultArray[15];
													
													localStorage.user_type=resultArray[16];
													
													localStorage.market_doctor=resultArray[17];
													//alert (localStorage.menu);

													
													
													var productList=localStorage.productListStr.split('<rd>');
													var productLength=productList.length;
													
													//------------ Order Item list								
													
													
													//alert ('1')
													
												//	var product_tbl_doc_campaign='<ul id="campaign_combo_id_lv" data-role="listview"  data-filter="true" data-input="#campaign_combo_id" data-inset="true" data-filter-reveal="true" > ';
												
											//	var product_tbl_doc_campaign='<ul id="campaign_combo_id_lv" data-role="listview"  data-filter="true" data-input="#campaign_combo_id" > ';
													var product_tbl_doc_campaign_a=''
													var product_tbl_doc_campaign_b=''
													var product_tbl_doc_campaign_c=''
													var product_tbl_doc_campaign_d=''
													var product_tbl_doc_campaign_e=''
													var product_tbl_doc_campaign_f=''
													var product_tbl_doc_campaign_g=''
													var product_tbl_doc_campaign_h=''
													var product_tbl_doc_campaign_i=''
													var product_tbl_doc_campaign_j=''
													var product_tbl_doc_campaign_k=''
													var product_tbl_doc_campaign_l=''
													var product_tbl_doc_campaign_m=''
													var product_tbl_doc_campaign_n=''
													var product_tbl_doc_campaign_o=''
													var product_tbl_doc_campaign_p=''
													var product_tbl_doc_campaign_q=''
													var product_tbl_doc_campaign_r=''
													var product_tbl_doc_campaign_s=''
													var product_tbl_doc_campaign_t=''
													var product_tbl_doc_campaign_u=''
													var product_tbl_doc_campaign_v=''
													var product_tbl_doc_campaign_w=''
													var product_tbl_doc_campaign_x=''
													var product_tbl_doc_campaign_y=''
													var product_tbl_doc_campaign_z=''

													for (j=0; j < productLength; j++){
														var productArray2 = productList[j].split('<fd>');
														var product_id2=productArray2[0];	
														var product_name2=productArray2[1];
														var product_price=productArray2[2];
														
														var product_qty='';																		


														
														if (product_name2.indexOf("A")==0){
															product_tbl_doc_campaign_a=product_tbl_doc_campaign_a+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("B")==0){
															product_tbl_doc_campaign_b=product_tbl_doc_campaign_b+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("C")==0){
															product_tbl_doc_campaign_c=product_tbl_doc_campaign_c+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("D")==0){
															product_tbl_doc_campaign_d=product_tbl_doc_campaign_d+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("E")==0){
															product_tbl_doc_campaign_e=product_tbl_doc_campaign_e+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("F")==0){
															product_tbl_doc_campaign_f=product_tbl_doc_campaign_f+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("G")==0){
															product_tbl_doc_campaign_g=product_tbl_doc_campaign_g+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("H")==0){
															product_tbl_doc_campaign_h=product_tbl_doc_campaign_h+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("I")==0){
															product_tbl_doc_campaign_i=product_tbl_doc_campaign_i+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("J")==0){
															product_tbl_doc_campaign_j=product_tbl_doc_campaign_j+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("K")==0){
															product_tbl_doc_campaign_k=product_tbl_doc_campaign_k+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("L")==0){
															product_tbl_doc_campaign_l=product_tbl_doc_campaign_l+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("M")==0){
															product_tbl_doc_campaign_m=product_tbl_doc_campaign_m+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("N")==0){
															product_tbl_doc_campaign_n=product_tbl_doc_campaign_n+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("O")==0){
															product_tbl_doc_campaign_o=product_tbl_doc_campaign_o+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("P")==0){
															product_tbl_doc_campaign_p=product_tbl_doc_campaign_p+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("Q")==0){
															product_tbl_doc_campaign_q=product_tbl_doc_campaign_q+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("R")==0){
															product_tbl_doc_campaign_r=product_tbl_doc_campaign_r+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("S")==0){
															product_tbl_doc_campaign_s=product_tbl_doc_campaign_s+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("T")==0){
															product_tbl_doc_campaign_t=product_tbl_doc_campaign_t+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("U")==0){
															product_tbl_doc_campaign_u=product_tbl_doc_campaign_u+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("V")==0){
															product_tbl_doc_campaign_v=product_tbl_doc_campaign_v+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("W")==0){
															product_tbl_doc_campaign_w=product_tbl_doc_campaign_w+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("X")==0){
															product_tbl_doc_campaign_x=product_tbl_doc_campaign_x+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("Y")==0){
															product_tbl_doc_campaign_y=product_tbl_doc_campaign_y+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														if (product_name2.indexOf("Z")==0){
															product_tbl_doc_campaign_z=product_tbl_doc_campaign_z+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														}
														$("#error_login").html('Processing Product List....');	
														//-------------Sample----------
													
														
													
													}
													
													//product_tbl_doc_campaign=product_tbl_doc_campaign+'</ul>';//+'</table>'	//+'</ul>';						
											localStorage.product_tbl_doc_campaign_a=product_tbl_doc_campaign_a;
											localStorage.product_tbl_doc_campaign_b=product_tbl_doc_campaign_b;
											localStorage.product_tbl_doc_campaign_c=product_tbl_doc_campaign_c;
											localStorage.product_tbl_doc_campaign_d=product_tbl_doc_campaign_d;
											localStorage.product_tbl_doc_campaign_e=product_tbl_doc_campaign_e;
											localStorage.product_tbl_doc_campaign_f=product_tbl_doc_campaign_f;
											localStorage.product_tbl_doc_campaign_g=product_tbl_doc_campaign_g;
											localStorage.product_tbl_doc_campaign_h=product_tbl_doc_campaign_h;
											localStorage.product_tbl_doc_campaign_i=product_tbl_doc_campaign_i;
											localStorage.product_tbl_doc_campaign_j=product_tbl_doc_campaign_j;
											localStorage.product_tbl_doc_campaign_k=product_tbl_doc_campaign_k;
											localStorage.product_tbl_doc_campaign_l=product_tbl_doc_campaign_l;
											localStorage.product_tbl_doc_campaign_m=product_tbl_doc_campaign_m;
											localStorage.product_tbl_doc_campaign_n=product_tbl_doc_campaign_n;
											localStorage.product_tbl_doc_campaign_o=product_tbl_doc_campaign_o;
											localStorage.product_tbl_doc_campaign_p=product_tbl_doc_campaign_p;
											localStorage.product_tbl_doc_campaign_q=product_tbl_doc_campaign_q;
											localStorage.product_tbl_doc_campaign_r=product_tbl_doc_campaign_r;
											localStorage.product_tbl_doc_campaign_s=product_tbl_doc_campaign_s;
											localStorage.product_tbl_doc_campaign_t=product_tbl_doc_campaign_t;
											localStorage.product_tbl_doc_campaign_u=product_tbl_doc_campaign_u;
											localStorage.product_tbl_doc_campaign_v=product_tbl_doc_campaign_v;
											localStorage.product_tbl_doc_campaign_w=product_tbl_doc_campaign_w;
											localStorage.product_tbl_doc_campaign_x=product_tbl_doc_campaign_x;
											localStorage.product_tbl_doc_campaign_y=product_tbl_doc_campaign_y;
											localStorage.product_tbl_doc_campaign_z=product_tbl_doc_campaign_z;
											
																//$("#doctor_campaign_list_tbl").html(localStorage.product_tbl_str_doc_campaign);

											//		$('#campaign_combo_id_lv').listview();
													
												
													
													
												
													
													//------------- Visit Plan Market List / Client Profile Market List / Unschedule
													var planMarketList = localStorage.marketListStr.split('<rd>');
													var planMarketListShowLength=planMarketList.length	
													
													var visitPlanMarketComb=''								
													var profileMarketComb='';								
													var unscheduleMarketComb='';
													
													for (var k=0; k < planMarketListShowLength; k++){
														var planMarketValueArray = planMarketList[k].split('<fd>');
														planMarketID=planMarketValueArray[0];
														planMarketName=planMarketValueArray[1];
														marketID=planMarketID
														marketName=planMarketName
														var marketNameID=planMarketName+'|'+planMarketID;
														//alert (marketNameID);
														if(planMarketID!=''){
															unscheduleMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';

															}
													}
																				
																	
													localStorage.unschedule_market_cmb_id=unscheduleMarketComb;
													

													//---------------
													$("#error_login").html('');
													$("#wait_image_login").hide();
													$("#loginButton").show();
													
													//----------------
													localStorage.visit_page=""
													
													
													$("#se_mpo").val(localStorage.user_id);

													localStorage.synced='YES';
													url = "#pageHome";
													$.mobile.navigate(url);								
													location.reload();
													
													set_doc_all();
													
												}else{
													$("#wait_image_login").hide();
													$("#loginButton").show();
													$("#error_login").html('Network Timeout. Please try again.');							
													}
											}
										  },
									  error: function(result) {					 
										  $("#wait_image_login").hide();
										  $("#loginButton").show();
										  $("#error_login").html('Network Timeout. Please try again.');
										
										  
										  var url = "#login";
										  $.mobile.navigate(url);	
									  }
								  });//end ajax
								}//base url check
						//alert ('nadira');
						//-------------		
					}else{
						$("#wait_image_login").hide();
						$("#loginButton").show();
						$("#error_login").html('Login Failed. Please Check CID, UserID, Password.');	
					}
					
				}
			  },
			  error: function(result) {			  	   
				 // alert ('nadira');
				  $("#wait_image_login").hide();
				  $("#loginButton").show();
				  $("#error_login").html('Network  Timeout. Please Check Internet Connection');	
				
			  }
		});//end ajax
		
		//alert(base_url+','+photo_url+'2');
		
		
		  }//end else	
	}//function




//------------------------------Unsheduled visit: market
function addMarketList() {
	$("#unschedule_market_combo_id").val('');
	var unschedule_market_combo_list=localStorage.unschedule_market_cmb_id;
	//---
	var unschedule_market_combo_ob=$('#unschedule_market_combo_id_lv');
	unschedule_market_combo_ob.empty();
	unschedule_market_combo_ob.append(unschedule_market_combo_list);
	
	//-------	
	var url = "#page_market";
	$.mobile.navigate(url);
	unschedule_market_combo_ob.listview("refresh");
}

//--------------------------------- Unsheduled visit: Client list by market id

function marketNextLV(lvalue) {
	
	$("#unschedule_market_combo_id").val(lvalue);
	marketNext_doc();
	
}






//--------------------------------- Unsheduled visit: retailer next
function marketRetailerNextLV(lvalue) {
	$("#unscheduled_m_client_combo_id").val(lvalue);
		marketRetailerNext_doc();
		localStorage.campaign_doc_str=''
	}




function replace_special_char(string_value){
	var real_value=string_value.replace(')','').replace('(','').replace('{','').replace('}','').replace('[','').replace(']','').replace('"','').replace("'","").replace("/'","").replace("\'","").replace('>','').replace('<','');
	return real_value;
}








//---------------------- Exit Application
function exit() {	
	navigator.app.exitApp();
}




//--------------------Item Search Start----------------
function search_item() {	
	var p_name=$("#item_search").val();
	
	vfinal=p_name.toUpperCase()
	
	var productList=localStorage.productListStr.split('<rd>');
	var productLength=productList.length;										
	for (j=0; j < productLength; j++){				
		var orderItemArray = productList[j].split('<fd>');
		var product_id=orderItemArray[0];	
		var product_name=orderItemArray[1];
		//alert (product_name);
		if (product_name.indexOf(vfinal)==0){
			//alert (product_name);
			jQuery("#order_qty"+product_id).focus().select();
			$("#item_search").val('');
			return;
		}
				
	}
	
}


//--------------------Item Search End----------------



//===================Doctor Start==============
function marketNext_doc() {
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	localStorage.visit_market_show=market_name
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
		}else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
			
			
			var marketNameId=market_name.split('|');
			var market_Id=marketNameId[1];
			
			var visit_type="Unscheduled";
			var scheduled_date="";
			
			
			result=localStorage.market_doctor
			
			var resultArray = result.split('</'+market_Id+'>');
			var doc_result_list=resultArray[0].split('<'+market_Id+'>')
			var doc_result=doc_result_list[1]
			
			
			//alert (doc_result);
			
			if (result==''){
				$("#err_market_next").text("Sorry Network not available");	
				$("#wait_image_unschedule_market").hide();		
				$("#btn_unschedule_market").show();
			}else{					

				//-----------------------------------
					if ((doc_result== undefined) || (doc_result== 'undefined')){
						$("#err_market_next").text("Doctor not available");	
						$("#wait_image_unschedule_market").hide();		
						$("#btn_unschedule_market").show();
						
					}
					else{
						var mClientList = doc_result.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var unscheduled_m_client_list=''
						for ( i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							//alert (mClientID)
							if(mClientID!=''){
								unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+'</a></li>';
								}								
						}
									
									
						//var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
						
						
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
						
						unscheduled_m_client_combo_ob.empty()
						unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
									
						$(".market").html(market_name);								
						$(".visit_type").html(visit_type);								
						$(".s_date").html(scheduled_date);
						localStorage.visit_type=visit_type
						//localStorage.scheduled_date=scheduled_date
									
									//-----------------------------------
									$("#err_market_next").text("");
									$("#wait_image_unschedule_market").hide();		
									$("#btn_unschedule_market").show();
									
									//------- 
									var url = "#page_market_ret";	
									$.mobile.navigate(url);
									
									unscheduled_m_client_combo_ob.listview("refresh");
									
								}
					
					}
 		
			
		}			
}
//==============================Doctor==========

function marketRetailerNext_doc() {
	$("#err_m_retailer_next").text("");
	visit_client=$("#unscheduled_m_client_combo_id").val();		
	
	if(visit_client=='' || visit_client==0){
			$("#err_m_retailer_next").text("Retailer required");
	}else{
		$("#btn_unschedule_market_ret").hide();
		$("#unscheduled_m_client_combo_id_lv").hide();
		
		//alert ('nn');
		$("#wait_image_ret").show();		
		
		$(".visit_client").html(visit_client);
		
		localStorage.visit_client_show=visit_client
		if (visit_client!=localStorage.visit_client){
			
			localStorage.productGiftStr=''
			localStorage.campaign_doc_str=''
			localStorage.productSampleStr=''
			
			localStorage.productppmStr='';
			
			localStorage.campaign_show_1='';
			localStorage.gift_show_1='';
			localStorage.sample_show_1='';
			localStorage.ppm_show_1='';
			

//			==========================
		set_doc_all();
//			===============================
		}
		localStorage.visit_client=visit_client
		localStorage.visit_page="YES"
		
		//--------
		$("#wait_image_unschedule_market_ret").hide();		
		$("#unscheduled_m_client_combo_id_lv").show();
		$("#wait_image_ret").hide();
		

		var url = "#page_doctor_campaign";
		$.mobile.navigate(url);
		//$("campaign_combo_id_lv").empty()
		//$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_a);	
		//location.reload();
		localStorage.flag_a=0
		localStorage.flag_b=0
		localStorage.flag_c=0
		localStorage.flag_d=0
		localStorage.flag_e=0
		localStorage.flag_f=0
		localStorage.flag_g=0
		localStorage.flag_h=0
		localStorage.flag_i=0
		localStorage.flag_j=0			
		localStorage.flag_k=0
		localStorage.flag_l=0
		localStorage.flag_m=0
		localStorage.flag_n=0
		localStorage.flag_o=0
		localStorage.flag_p=0
		localStorage.flag_q=0
		localStorage.flag_r=0
		localStorage.flag_s=0
		localStorage.flag_t=0
		localStorage.flag_u=0
		localStorage.flag_v=0
		localStorage.flag_w=0
		localStorage.flag_x=0
		localStorage.flag_y=0
		localStorage.flag_z=0
		
			
	
	}
}
//=========================

function new_list(){
	var list_alphabet=$("#campaign_combo_id").val().toUpperCase();	
	if (list_alphabet.length==1){
		
		if (list_alphabet=='A'){
				//$("#campaign_combo_id_lv").empty()
				if (localStorage.flag_a==0){
					localStorage.flag_a=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_a);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='B'){
				//$("#campaign_combo_id_lv").empty()
				if (localStorage.flag_b==0){
					localStorage.flag_b=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_b);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='C'){
				//$("#campaign_combo_id_lv").empty()
				if (localStorage.flag_c==0){
					localStorage.flag_c=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_c);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='D'){
				//$("#campaign_combo_id_lv").empty()
				if (localStorage.flag_d==0){
					localStorage.flag_d=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_d);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='E'){
				//$("#campaign_combo_id_lv").empty()
				if (localStorage.flag_e==0){
					localStorage.flag_e=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_e);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='F'){
				//$("#campaign_combo_id_lv").empty()
				if (localStorage.flag_f==0){
					localStorage.flag_f=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_f);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='G'){
				//$("#campaign_combo_id_lv").empty()
				if (localStorage.flag_g==0){
					localStorage.flag_g=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_g);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='H'){
				//$("#campaign_combo_id_lv").empty()
				if (localStorage.flag_h==0){
					localStorage.flag_h=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_h);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='I'){
				//$("#campaign_combo_id_lv").empty()
				if (localStorage.flag_i==0){
					localStorage.flag_i=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_i);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='J'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_j==0){
					localStorage.flag_j=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_j);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='K'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_k==0){
					localStorage.flag_k=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_k);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='L'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_l==0){
					localStorage.flag_l=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_l);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='M'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_m==0){
					localStorage.flag_m=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_m);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='N'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_n==0){
					localStorage.flag_n=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_n);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='O'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_o==0){
					localStorage.flag_o=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_o);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='P'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_p==0){
					localStorage.flag_p=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_p);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='Q'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_q==0){
					localStorage.flag_q=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_q);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='R'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_r==0){
					localStorage.flag_r=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_r);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='S'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_s==0){
					localStorage.flag_s=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_s);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='T'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_t==0){
					localStorage.flag_t=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_t);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='U'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_u==0){
					localStorage.flag_u=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_u);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='V'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_v==0){
					localStorage.flag_v=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_v);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='W'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_w==0){
					localStorage.flag_w=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_w);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='X'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_x==0){
					localStorage.flag_x=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_x);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='Y'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_y==0){
					localStorage.flag_y=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_y);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
		else if (list_alphabet=='Z'){
				//$("campaign_combo_id_lv").empty()
				if (localStorage.flag_z==0){
					localStorage.flag_z=1
					$("#campaign_combo_id_lv").append(localStorage.product_tbl_doc_campaign_z);
				}
				//$("#campaign_combo_id_lv").listview('refresh');
		}
	}
}
//==================================
function getCampaign(){
	localStorage.campaign=1;

	if ((localStorage.campaign_doc_str==undefined) || (localStorage.campaign_doc_str=='undefined')){
		localStorage.campaign_doc_str='';
	}
	
	var campaign_show=localStorage.campaign_doc_str;
	
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	
	
	for (j=0; j < campaign_showListLength; j++){	
		var camp_combo="#doc_camp"+campaign_showList[j]
		$(camp_combo).attr('checked', true);
	}
	
	var url = "#page_doctor_campaign";	
	$.mobile.navigate(url);	
}



//--------------------Campaign Item Search Start----------------
function search_item_doctor_campaign() {	
	var p_name=$("#item_search_doctor_campaign").val();

	 
	
	vfinal=p_name.toUpperCase()
	
	var productList=localStorage.productListStr.split('<rd>');
	var productLength=productList.length;										
	for (j=0; j < productLength; j++){				
		var orderItemArray = productList[j].split('<fd>');
		var product_id=orderItemArray[0];	
		var product_name=orderItemArray[1];
		//alert (product_name);
		if (product_name.indexOf(vfinal)==0){
			//alert (product_name);
			jQuery("#doc_camp"+product_id).focus().select();
			$("#item_search_doctor_campaign").val('');
			return;
		}
				
	}
	
}


//--------------------Campaign Item Search End----------------
//--------------------------------- Order: Set Order data
function getDocCampaignData_keyup(product_id){
	
	var pid=$("#doc_camp_id"+product_id).val();
	var pname=$("#doc_camp_name"+product_id).val();
	var camp_combo="#doc_camp"+product_id
	
	var camp_combo_val=$(camp_combo).is(":checked")
	

	var campaign_doc_str=localStorage.campaign_doc_str
	var campaign_docShowStr='';
	var campaign_doc_strList="";
        var campaign_doc_strListLength=0;
        var campaign_docProductId="";
	//alert (camp_combo_val)
	if (camp_combo_val == true ){
		if (campaign_doc_str.indexOf(pid)==-1){
			if (campaign_doc_str==''){
				campaign_doc_str=pid
				productOrderShowStr=pname
				campaign_doc_str=pid+'<fd>'+pname
			}else{
				campaign_doc_str=campaign_doc_str+'<rd>'+pid+'<fd>'+pname
			}	
		}
		else{
			campaign_doc_strList=localStorage.campaign_doc_str.split('<rd>');
			campaign_doc_strListLength=campaign_doc_strList.length;
			for (j=0; j < orderProductLength; j++){
					campaign_docProductId=campaign_doc_strList[j];

					if (campaign_docProductId==pid){
						campaign_doc_str=campaign_doc_str.replace(campaign_docProductId, "")
						
						
						if (campaign_doc_str==''){
							campaign_doc_str=pid
							//productOrderShowStr=pname+'('+pqty+')'
						}else{
							campaign_doc_str=campaign_doc_str+'<rd>'+pid+'<fd>'+pname
							//productOrderShowStr=productOrderShowStr+', '+pname+'('+orderProductQty+')'
							}		
					}
			}
		}
		localStorage.campaign_doc_str=campaign_doc_str;
		
		
	}
	else{
		campaign_doc_strList=localStorage.campaign_doc_str.split('<rd>');
		campaign_doc_strListLength=campaign_doc_strList.length;
		
		for (j=0; j < campaign_doc_strListLength; j++){
		  campaign_docProductId=campaign_doc_strList[j]
				
				product_index=campaign_doc_str.indexOf(campaign_docProductId)
				if (campaign_docProductId==pid){
					if (campaign_doc_strListLength>1){
						if (product_index==0){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j]+'<rd>', "")
						}
						if (product_index > 0){
							campaign_doc_str=campaign_doc_str.replace('<rd>'+campaign_doc_strList[j], "")
						}
					}
					if (campaign_doc_strListLength==1){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j], "")
						
					}
			}
		}
		localStorage.campaign_doc_str=campaign_doc_str;
		
	}
	}

	


function prescription_submit(){
	$("#error_prescription_submit").html("")		
	$("#wait_image_prescription").hide();
	
	var doctorId=localStorage.visit_client.split('|')[1]	
	var doctor_name=localStorage.visit_client.split('|')[0]
	
	var areaId=localStorage.visit_market_show.split('|')[1]
	
	if (doctor_name==''){		
		$("#error_prescription_submit").text("Required Doctor");
		$("#wait_image_prescription").show();
	}else{
		
		var latitude=$("#lat").val();
		var longitude=$("#long").val();		
		
		var prescriptionPhoto=$("#prescriptionPhoto").val();
		//var prescriptionPhoto='aa';
		//prescriptionPhoto='dasdfadf'
		if (prescriptionPhoto==''){
			$("#error_prescription_submit").html('Required picture');
			$("#wait_image_prescription").show();
		}else{			
			var now = $.now();
			var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';
			
			//if (latitude=='' || latitude==0 || longitude=='' || longitude==0){
//				$("#error_prescription_submit").html('Location not Confirmed');	
//				$("#wait_image_prescription").show();	
//			}else{
								
				$("#wait_image_prescription").show();
			//	$("#btn_prescription_submit").show();
				
				var medicine_1=$("#medicine_1").val();
				var medicine_2=$("#medicine_2").val();
				var medicine_3=$("#medicine_3").val();
				var medicine_4=$("#medicine_4").val();
				var medicine_5=$("#medicine_5").val();
				
				//$("#error_prescription_submit").text(localStorage.base_url+'prescription_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode+'&areaId='+areaId+'&doctor_id='+encodeURIComponent(doctorId)+'&doctor_name='+encodeURIComponent(doctor_name)+'&medicine_1='+encodeURIComponent(medicine_1)+'&medicine_2='+encodeURIComponent(medicine_2)+'&medicine_3='+encodeURIComponent(medicine_3)+'&medicine_4='+encodeURIComponent(medicine_4)+'&medicine_5='+encodeURIComponent(medicine_5)+'&latitude='+latitude+'&longitude='+longitude+'&pres_photo='+imageName+'&campaign_doc_str='+localStorage.campaign_doc_str+'&version=1')							
				//alert (localStorage.campaign_doc_str)
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'prescription_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode+'&areaId='+areaId+'&doctor_id='+encodeURIComponent(doctorId)+'&doctor_name='+encodeURIComponent(doctor_name)+'&medicine_1='+encodeURIComponent(medicine_1)+'&medicine_2='+encodeURIComponent(medicine_2)+'&medicine_3='+encodeURIComponent(medicine_3)+'&medicine_4='+encodeURIComponent(medicine_4)+'&medicine_5='+encodeURIComponent(medicine_5)+'&latitude='+latitude+'&longitude='+longitude+'&pres_photo='+imageName+'&campaign_doc_str='+localStorage.campaign_doc_str +'&version=1',
					 success: function(result) {	
					 					
							if (result==''){
								$("#error_prescription_submit").html('Network timeout. Please ensure you have active internet connection.');
								$("#wait_image_prescription").hide();
								$("#btn_prescription_submit").show();
							}else{
								var resultArray = result.split('<SYNCDATA>');	
									
								if (resultArray[0]=='FAILED'){						
									$("#error_prescription_submit").html(resultArray[1]);
									$("#wait_image_prescription").hide();
									$("#btn_prescription_submit").show();
								}else if (resultArray[0]=='SUCCESS'){									
									var result_string=resultArray[1];
									
									
									document.getElementById('myImagePrescription').src = '';
									
									//image upload function									
									uploadPhoto(prescriptionPhoto, imageName);
									//alert ('0')
									
									$("#doctor_name").val("");
									$("#medicine_1").val("");
									$("#medicine_2").val("");
									$("#medicine_3").val("");
									$("#medicine_4").val("");
									$("#medicine_5").val("");
									localStorage.campaign_doc_str=''
									
									$("#lat").val("");
									$("#long").val("");
									//alert ('1')
									$("#prescriptionPhoto").val("");
									
									$("#wait_image_prescription").hide();
									$("#btn_prescription_submit").hide();
									//alert ('2')
									//--------------------------
									clear_mgs();
									$("#wait_image_prescription").hide();
						 		    $("#btn_prescription_submit").hide();
   								    $("#btn_loc_submit").show();
									url = "#page_success";
									$.mobile.navigate(url);	
									
									
								}else{						
									$("#error_prescription_submit").html('Authentication error. Please register and sync to retry.');
									$("#wait_image_prescription").hide();
									$("#btn_prescription_submit").show();
									}
							}
						  },
					  error: function(result) {			  
						 // $("#error_prescription_submit").html('Invalid Request'); 
						  $("#wait_image_prescription").hide();
						  $("#btn_prescription_submit").show();
					  }
					  });//end ajax
				//}
			}
		
		}
	//}
}

//======================Doctor End==============
function clear_mgs(){
	$("#error_login").html('');
	$("#error_home_page").html('');	
	$("#err_market_next").html('');
	$("#err_m_retailer_next").html('');
	$("#myerror_doctor_campaign").html('');
	$("#error_prescription_submit").html('');

	
}
function new_ps(){
	url = "#pageHome";
	$.mobile.navigate(url);	
	location.reload();

	
}

//=========================Menu functions Start=================



//function doctor_visit() {
//	$("#ret_cat").hide();
//	$("#d_visit").html("Doctors");
//	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit - Market - Doctor</font>');
//	localStorage.doctor_flag=1;
//	localStorage.visit_page="NO";
//	addMarketList();
//	
//}





//--------------Campaign

$(document).on("pagecreate", "#page_doctor_campaign", function(){    
	$("#campaign_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_campaign);
});

function startsWithSearch_campaign( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
}




//------------Market
$(document).on("pagecreate", "#page_market", function(){    
	$("#unschedule_market_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_market);
});

function startsWithSearch_market( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.indexOf(searchValue.toUpperCase(), 0) != 5 ){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 

//------------Chemist
$(document).on("pagecreate", "#page_market_ret", function(){    
	$("#unscheduled_m_client_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_ret);
});

function startsWithSearch_ret( idx, searchValue ) {
	var ret = false;
	//alert (searchValue);
    if (searchValue && searchValue.length > 0){ 
        var text = $(this).text().toUpperCase();
		
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        if( text.indexOf(searchValue.toUpperCase(), 0) != 5){
			ret = true; //filter this one out
        }
    } 
    return ret;
} 




//==============================html script==========================

$(document).ready(function(){
	
	$("#wait_image_login").hide();
	$("#loginButton").show();
	
	$("#wait_image_prescription").hide();

	$("#wait_image_schedule_ret").hide();		
	$("#btn_schedule_ret").show();
	
	$("#wait_image_unschedule_market").hide();		
	$("#btn_unschedule_market").show();
	
	$("#wait_image_ret").hide();	
	$("#wait_image_unschedule_market_ret").hide();		
	$("#btn_unschedule_market_ret").show();
	
	$("#wait_image_visit_submit").hide();		
	$("#visit_submit").show();
	
	$("#wait_image_visit_plan_market").hide();		
	$("#btn_visit_plan_market").show();

	$("#wait_image_region_report").hide();
	
	$("#visit_submit").hide();
	
	first_page();
	

	
	clear_mgs();

});



//==========================================doctor===============

$.mobile.document
.on( "listviewcreate", "#se_market_doc-menu", function( e ) {
	var input,
		listbox = $( "#se_market_doc-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='marketSearch_doc' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#se_market_doc-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#se_market_doc-dialog", function( e ) {
	var form = $( "#se_market_doc-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_market_doc-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


////----------------------------Set Item Combo---------
$.mobile.document
.on( "listviewcreate", "#se_item-menu", function( e ) {
	var input,
		listbox = $( "#se_item-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='itemSearch' data-type='search'></input></br>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#se_item-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#se_item-dialog", function( e ) {
	var form = $( "#se_item-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_item-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});





//============Doctor end

function takePictureNext(){	
	
	$("#error_home_page").html("");
	$("#btn_prescription_submit").show();
	
	var pres_photo=$("#prescriptionPhoto").val();
	
	//pres_photo='sssssssss'
	
	if (pres_photo==''|| pres_photo==undefined){
		$("#error_home_page").html("Required Picture")
	}else{
		
		//--------------------------	
		$("#ret_cat").hide();
		$("#d_visit").html("Doctors");
		$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit - Market - Doctor</font>');
		localStorage.doctor_flag=1;
		localStorage.visit_page="NO";
		addMarketList();
		//url = "#page_route";
		//$.mobile.navigate(url);
	}
}


function getDocCampaignData(){	
	var url = "#page_prescription";	
	$.mobile.navigate(url);			
	}
// ----------------Camera------------

//image Profile
function getPrescriptionImage() {
	//navigator.camera.getPicture(onSuccessProfile, onFailProfile, { quality: 10,
		//destinationType: Camera.DestinationType.FILE_URI });
   
   navigator.camera.getPicture(onSuccessProfile, onFailProfile, { quality: 90,
		targetWidth: 400,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });
		
}
function onSuccessProfile(imageURI) {
    var image = document.getElementById('myImagePrescription');
    image.src = imageURI;
	imagePath = imageURI;
	$("#prescriptionPhoto").val(imagePath);
}
function onFailProfile(message) {
	imagePath="";
    alert('Failed because: ' + message);
}


function uploadPhoto(imageURI, imageName) {
    var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName;
    options.mimeType="image/jpeg";
	
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
	
    options.params = params;
	
    var ft = new FileTransfer();
     ft.upload(imageURI, encodeURI(localStorage.photo_submit_url+"fileUploaderPrescription/"),winProfile,failProfile,options);
	 
}

function winProfile(r) {
}

function failProfile(error) {
	$("#error_prescription_submit").text('Memory Error. Please take new picture and Submit');
}