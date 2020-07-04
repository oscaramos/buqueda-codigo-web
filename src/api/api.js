import queryString from 'query-string'

const url = 'http://126c5a6f6bb1.ngrok.io/'

const codes = ['public static int parseInt ( String str , int radix ) { return parseInt ( str , radix , false ) ; } \n',
	'public static void setDatatypeConverter ( DatatypeConverterInterface converter ) { if ( converter == null ) { throw new IllegalArgumentException ( Messages . format ( Messages . CONVERTER_MUST_NOT_BE_NULL ) ) ; } else if ( theConverter == null ) { theConverter = converter ; } } \n',
	'public static String toBinaryString ( int i ) { return toUnsignedString ( i , 1 ) ; } \n',
	'public static int parseInt ( String s ) { return parseInt ( s , 10 , false ) ; } \n',
	'public static int [ ] toInt ( String [ ] ss ) { int [ ] is = new int [ ss . length ] ; for ( int i = 0 ; i < is . length ; i ++ ) { is [ i ] = Integer . parseInt ( ss [ i ] ) ; } return is ; } \n',
	'public void sortTestMethods ( ) { this . sortedTestMethodsByStartTime = new ArrayList < MethodResult > ( ) ; Map < Date , List < MethodResult >> map = new HashMap < Date , List < MethodResult >> ( ) ; for ( ClassResult aClass : classList ) { if ( aClass . getTestMethods ( ) != null ) { for ( MethodResult aMethod : aClass . getTestMethods ( ) ) { Date startDate = aMethod . getStartedAt ( ) ; if ( ! aMethod . getStatus ( ) . equalsIgnoreCase ( "skip" ) && startDate != null ) { if ( map . containsKey ( startDate ) ) { map . get ( startDate ) . add ( aMethod ) ; } else { List < MethodResult > list = new ArrayList < MethodResult > ( ) ; list . add ( aMethod ) ; map . put ( startDate , list ) ; } } } } } List < Date > keys = new ArrayList < Date > ( map . keySet ( ) ) ; Collections . sort ( keys ) ; for ( Date key : keys ) { if ( map . containsKey ( key ) ) { this . sortedTestMethodsByStartTime . addAll ( map . get ( key ) ) ; } } } \n',
	'public void setInt ( String name , int value ) { set ( name , Integer . toString ( value ) ) ; } \n',
	'public synchronized void setIfUnset ( String name , String value ) { if ( get ( name ) == null ) { set ( name , value ) ; } } \n',
	'public synchronized void setIfUnset ( String name , String value ) { if ( get ( name ) == null ) { set ( name , value ) ; } } \n',
	'public String numToString ( int aPrecision , int aBase ) { if ( javaBigInteger != null ) { return javaBigInteger . toString ( aBase ) ; } else { String result = javaBigDecimal . toPlainString ( ) ; result = result . replace ( "+" , "" ) ; return result ; } } \n']

const codes_response = {
	codes
}

const searchCode = (query, numResults) => {
	const params = { query: query, n_results: numResults }
	return Promise.resolve(codes_response)
	// return fetch(`${url}?${queryString.stringify(params)}`)
	// 	.then(res => res.json())
}

export default searchCode
