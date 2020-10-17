class genericMethods {

    randomText(string_length) {
		var text = ""
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

		for (var i = 0; i < string_length; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length))		
		return text
    }

}
export default genericMethods