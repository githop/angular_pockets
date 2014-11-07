angular_pockets
===============

Angular thick front end client for padded pockets 2.0. Consumes JSON from rails API.
see it live at (see it live)(http://pocketspadded.herokuapp.com, "Padded Pockets")

###Padded Pockets
This is the angular half of my rails/angular hybrid app.

##What it does
The angular app primarily consumes JSON and fetches images. It handles routing and templates as well.

###JSON 
The JSON comes from a Rails server designed to act as an API for the politicians resource. 
The rails server also is responssible for fetching the contributions from a third party, OpenSecrets.org
and sendind them back as JSON. The rails app will copy the contributions, so if a subsequent request is made,
the data is pulled my DB and no API call is maded to OpenSecrets. 

###Images
Naturally, hosting and serving 538 high resolution photos is not ideal. So, with a little Google Drive hack,
I rolled my own CDN. These images are available on github.io, although without static urls, so I decided to put
them in a public Google Drive folder.

I used Google Apps script to loop through the folder and grab all the Google Drive file ids. The file ids are used by
an angular factory which acts a client for the Google Drive Api.

Google's Drive API allows you to request thumbnails so it makes handling large image files relatively simple. I use
a spinner .gif in place of the image until API call is resolved. 

###Nifty things
The foundation typeahead is pretty neat for searching politicians. Unfortunatley, it's not a full text search.
When viewing a politician, the stripe under their photo changes color to match their party colors.
