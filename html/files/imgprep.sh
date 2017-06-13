#!/bin/sh -e
mdata-put prepare-image:state running
echo "This is my own image!" > /my.txt
export yn_start=y
export yn_nfs=n
export yn_subips=n
export yn_halt=n
/opt/local/bin/sm-prepare-image
mdata-put prepare-image:state success
poweroff
