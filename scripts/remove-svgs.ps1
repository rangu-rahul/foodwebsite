# Remove all .svg files from the images folder (moves them to a backup folder first)
# Run this from PowerShell in the project root: .\scripts\remove-svgs.ps1

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
$imagesDir = Join-Path $projectRoot 'images'
$backupDir = Join-Path $imagesDir 'svg_backup'

if (-not (Test-Path $imagesDir)) {
    Write-Error "Images folder not found: $imagesDir"
    exit 1
}

if (-not (Test-Path $backupDir)) {
    New-Item -Path $backupDir -ItemType Directory | Out-Null
}

$svgs = Get-ChildItem -Path $imagesDir -Filter '*.svg' -File -ErrorAction SilentlyContinue

if (-not $svgs) {
    Write-Host "No .svg files found in $imagesDir"
    exit 0
}

foreach ($f in $svgs) {
    $dest = Join-Path $backupDir $f.Name
    Write-Host "Moving $($f.FullName) -> $dest"
    Move-Item -Path $f.FullName -Destination $dest -Force
}

Write-Host "Moved $($svgs.Count) .svg files to $backupDir"
