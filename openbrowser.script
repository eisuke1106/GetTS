on run argv
	set username to item 1 of argv
	
	display dialog "End Stream of " & username
	set tmp to result
	set btn to button returned of tmp
	if btn = "OK" then
		do shell script "open -a Safari 'https://ja.chaturbate.com/" & username & "'"
	end if
end run