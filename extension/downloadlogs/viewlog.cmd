@echo off
SETLOCAL EnableDelayedExpansion
::gets around the windows parameter character limit by writing an .html that opens the tenhou/5 url

::  rem get unique file name
::  :uniqloop
::  set "tmpfile=%tmp%\bat~%RANDOM%.html"
::  if exist "%tmpfile%" goto :uniqloop

set "tmpfile=%tmp%~viewlog.html"

<NUL echo|set /p="<head><meta http-equiv='refresh' content='0; URL=https://tenhou.net/5/?tw=2#json="> %tmpfile%
<NUL type %1>> %tmpfile%
<NUL echo|set /p="'></head>">> %tmpfile%

start %tmpfile%

::you could wait and delete the file..
::pause
::del %tmpfile%
