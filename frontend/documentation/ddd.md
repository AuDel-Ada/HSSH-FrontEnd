## DOMAIN DRIVER DESIGN

! One domain === one responsability !
For instance : gallery has the responsability to exibit art (oeuvre and artists).

If something is used by multiple domains, it should be disposed in an upper shared folder.

Avoid absolute path and use relative path instead.

/shared => what is shared by domains
/Home => welcoming visitors
/About => give more informations
/Auth => log users
/Gallery => exibit art
    /types
        /constants
        /components
        /hooks
        /services
        /page => one page per domain
    /shared => what is shared by subdomains of Gallery
        /types
        /constants
        /components
        /hooks
        /services
    /Artist => presentation of artists
     /types
        /types
        /constants
        /components
        /hooks
        /services
        /page
    /Nft => presentation of one nft