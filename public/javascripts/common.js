<script>
    const url = 'http://localhost';
    const port = '3000';

    function selectorByName(docName){
        return document.getElementsByClassName(docName)[0];
    }

    function selectorByClass(docClass, index){
        return document.getElementsByClassName(docClass)[0];
    }

    function selectorById(docId, index){
        return document.getElementById(docId);
    }
    var $ = function ( elem ) {
	    var dom = document.querySelectorAll( elem ) , rtnVal = null ; 
        if ( dom.length == 0 ) rtnVal = undefined ;
        if ( dom.length == 1 ) rtnVal = dom[0] ; 
        if ( dom.length > 1 ) rtnVal = dom ; 
    	return rtnVal ; 
    } ; 
    function getInputValue(e) {
        return e.value;
    }

</script>