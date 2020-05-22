module.exports = function pageBody (params) {
  let { css, content, scripts } = params

  return `<!doctype html>
<html class="no-js" lang="en">
  <head>

    <title>Ryan Block</title>
    <meta name="description" content="I (help) build things.">
    <meta name="viewport" content="width=device-width,
    initial-scale=1, shrink-to-fit=no">
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:creator" content="@ryan">
    <meta name="twitter:description" content="Ryan Block">
    <!-- <meta name="twitter:image" content=""> -->

    <!-- OG -->
    <meta property="og:title" content="Ryan Block">
    <meta property="og:url" content="https://ryanblock.com/">
    <meta property="og:description" content="I (help) build things.">
    <!-- <meta property="og:image" content=""> -->
    <meta property="og:site_name" content="Ryan Block">

    <!-- Favicons -->
    <link rel="shortcut icon" href="/_static/favicon.ico">
    <link rel="icon" sizes="16x16 32x32 64x64" href="/_static/favicon.ico">
    <!-- <link rel="apple-touch-icon" href="icon.png"> -->

    <!-- Apple layout stuff -->
    <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <style type="text/css">
      ${css}
    </style>
  </head>
  <body>
    <!--[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
    <![endif]-->

    <div class="everything">
      <div class="contents">
        ${content}
      </div>
    </div>

    ${scripts}
  </body>
</html>
`
}
