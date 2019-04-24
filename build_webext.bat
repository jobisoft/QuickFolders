REM  create a new build for quickFilters
set /P QfWebRev=<revisionWeb.txt
set /a oldQfWebRev=%QfWebRev%
set /a QfWebRev+=1
pwsh -Command "(gc -en UTF8NoBOM manifest.json) -replace 'pre%oldQfWebRev%', 'pre%QfWebRev%' | Out-File manifest.json"
"C:\Program Files\7-Zip\7z" a -xr!.svn QuickFoldersWeb.zip manifest.json chrome.manifest chrome defaults license.txt
echo %QfWebRev% > revisionWeb.txt
move QuickFolders-web*.xpi "..\..\..\Release\_Test Versions\4.15\Web"
pwsh -Command "Start-Sleep -m 50"
rename QuickFoldersWeb.zip QuickFolders-web-4.15pre%QfWebRev%.xpi