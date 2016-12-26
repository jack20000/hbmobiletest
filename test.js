var test = function(){
	 
	 var te = { timeCode: '20161112',timetext:'2016-11-12',areaCode:'HB.ES',areatext:'恩施' };

	function _set( para ){
		te.timeCode = para.timeCode;
		te.timetext = para.timetext;
		te.areaCode = para.areaCode;
		te.areatext = para.areatext;
	}

	function _get(){
		return te;
	}

	return {
		set: _set,
		get: _get
	};

}();