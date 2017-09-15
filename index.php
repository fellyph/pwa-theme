<html>
  <head>
    <title><?php bloginfo('name') ?></title>
  <head>
  <body>
      <header>
        <h1><?php bloginfo('name') ?></h1>
      </header>
      <?php while(have_posts()): the_post(); ?>
        <?php get_template_part('loop','home'); ?>
      <?php endwhile;?>
  </body>
</html>