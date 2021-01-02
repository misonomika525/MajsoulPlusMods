#!/bin/bash

if [[ "" == $1 ]]; then
    echo "${0} log.json"
    echo "opens your log with tenhou.net/5"

    exit 1
fi

url="https://tenhou.net/5/?tw=2#json=""$(cat $1)"

case "$OSTYPE" in
	linux*)
		xdg-open "${url}"
		;;
	darwin*)
		open "${url}"
		;;
	cygwin*)
 		cygstart "${url}"
      	;;
	*)
		open "${url}" || start "${url}"
		;;
esac
