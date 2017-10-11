<?php get_header() ?>
      <?php while(have_posts()): the_post(); ?>
        <?php get_template_part('loop','home'); ?>
      <?php endwhile;?>
 <?php get_footer() ?>