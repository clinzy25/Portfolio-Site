<?php Header("Cache-Control: max-age=3000, must-revalidate"); ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="index.css">
    <title>Linzy.tech</title>
  </head>
  <body>

<?php
  require "includes/header.php";
?>

      <header>
        <h1>Conner Linzy</h1>
        <p class='description'>software development student and web developer based in Charlotte, NC</p>
      </header>

<!-- CARDS -->
      <article>
        <a href='works/works.html' class='card card_1'>
          <p class="card-text">works</p>
        </a>
        <a href='thoughts/thoughts.html' class='card'>
          <p class="card-text">thoughts</p>
        </a>
        <a href='about/about.html' class='card'>
          <p class="card-text">about</p>
        </a>
      </article>

<?php
  require 'includes/footer.php';
?>
    </div>
  </body>
</html>
