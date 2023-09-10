#!/bin/zsh
# magick $1.jpg $1.png
composite -geometry +0+0 frame.png $1.png f-$1.png
