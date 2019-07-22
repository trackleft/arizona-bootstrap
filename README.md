#  Arizona Bootstrap
The Univerisity of Arizona's theme for the Bootstrap 4 Framework.

## Using  Arizona Bootstrap

### CDN
Instructions for using the UA Digital CDN to include  Arizona Bootstrap in your project
can be found on the homepage:

[https://uadigital.arizona.edu/arizona-bootstrap/](https://uadigital.arizona.edu/arizona-bootstrap/)

### Versioning scheme
 Arizona Bootstrap uses the [SemVer](http://semver.org/) scheme to provide informative
version numbers for each release in the form of MAJOR.MINOR.PATCH.

1. MAJOR version when you make incompatible API changes,
2. MINOR version when you add functionality in a backwards-compatible manner, and
3. PATCH version when you make backwards-compatible bug fixes.


## Contributing

### Dependencies
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/)
* [NPM](https://www.npmjs.com/)
* [Bundler](https://bundler.io/)

### Initial setup for development in a local machine

*** Arizona Bootstrap build tools are tested to be compatible with the LTS version of Node.js (10.x.x)***

If you need to modify  Arizona Bootstrap in a local development environment, it must
include Node.js. If you have not installed this already,
[Node Version Manager](https://github.com/creationix/nvm) is one way to set it
up on macOS or Linux so that changes between node versions are relatively easy.

If you are contributing your modifications to  Arizona Bootstrap back to the main
repository, you must use the Git source control software. The instructions for
using this with  Arizona Bootstrap are similar to those given for the
[UA QuickStart](https://bitbucket.org/ua_drupal/ua_quickstart) Drupal
distribution, and in particular  Arizona Bootstrap uses the same workflow for
proposing changes through issue branches and pull requests on
[Bitbucket](https://bitbucket.org), but of course referring to
[ Arizona Bootstrap](https://bitbucket.org/uadigital/arizona-bootstrap) in place of
QuickStart. If you have permissions to access it, you should work from the main
repository, cloning it to your own environment with the
```
git clone git@bitbucket.org:uadigital/ua-bootstrap.git
```
command. If not, you will need to fork your own copy of the  Arizona Bootstrap
repository on Bitbucket, then work from a local clone of that fork.

The Node Package Manager (NPM) is required to rebuild  Arizona Bootstrap in your own
environment (to handle the many Node.js dependencies).

Currently the ruby package manager (bundler) must be available globally before
you can build Arizona Bootstrap.

### On making edits to  Arizona Bootstrap
 Arizona Bootstrap is entirely based on the Bootstrap Framework and thus is largely
a bunch of overrides. Sometimes Bootstrap doesn't have everything we'd like in
 Arizona Bootstrap, so when adding a feature that is not an override to Vanilla
Bootstrap, place those additions/appendages in `_custom.scss`.

NPM is responsible for controlling the numerous Node.js packages that help
build  Arizona Bootstrap, so if you change any of these you should make sure NPM is
tracking the change. The `package.json` file lists the packages and the
acceptable ranges of the versions to install. Different developers (and the
continuous integration systems) might end up with collections of packages that
are all at acceptable versions, but all slightly different, potentially behaving
differently. To keep everyone on the same page, the `package.lock` file tells
NPM to only use one specific version, even if `package.json` allows a range of
versions. If possible, use commands like `npm install --save-dev` and `npm ugrade` to
synchronize the changes both files.


## Development tips

### Making edits in Chrome persistent
Picking up from the last step, you should now have the Bootstrap documentation running
locally. Now to wire up Chrome DevTools to write changes out to the files you
are serving up. Go back to the browser and fire up Chrome DevTools and head over
to the __Sources__ tab. There should be a __Sources__ pane with a list of
domains where all your assets are being downloaded from. Right click in that pane
and select __Add Folder to Workspace__.

![Add Folder to
Workspace](https://bitbucket.org/uadigital/ua-bootstrap/raw/HEAD/docs/img/readme-1.png)

Add the directory where the ua-bootstrap repo is located. For me it was on my
Desktop so I added `~/Desktop/ua-bootstrap`. Now the folder is added to your
workspace. Now to link the files to the folder in your workspace. Go back to the
__Sources__ pane and right-click `ua-bootstrap.scss` in the folder titled
`source` under `localhost:8888`. Click __Map to File System Resource...__ and it
should auto-find the file in the added workspace folder. Hit enter and you're
set.

![Map to File System Resource...](https://bitbucket.org/uadigital/ua-bootstrap/raw/HEAD/docs/img/readme-2.png)

![ua-bootstrap.scss](https://bitbucket.org/uadigital/ua-bootstrap/raw/HEAD/docs/img/readme-3.png)

One caveat on using Chrome inspector to edit. Chrome does not have the ability
to make edits to the `*.scss` under the __Elements__ tab. You'll have to make
all edits in the __Sources__ tab, which is a bit of a pain. So find the files
you need to override in the __Elements__ tab, but then select the reference link
to bring you to the __Sources__ tab where you can make the edit and save.

![Make edit in Sources Tab](https://bitbucket.org/uadigital/ua-bootstrap/raw/HEAD/docs/img/readme-4.png)


## Tagging a release

[See instructions on Confluence](https://confluence.arizona.edu/display/UADigital/Releasing+a+New+Version+of+Bootstrap)

