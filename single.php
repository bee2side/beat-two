<?php include ('header_single.php'); ?>
<div id="single_main">
	<div id="single_content">
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
			<article class="single_article">
				<span class="single_article_date">
					<?php the_time('M, Y') ?>
				</span>
				<span class="single_article_title">
					<?php the_title(); ?>
				</span>
				<div class="single_article_content">
					<?php the_content(); ?>
				</div>
			</article>
		<?php endwhile; else: ?>
			<h2>Sorry!</h2>
		<?php endif; ?>

	</div><!-- single_content -->
    <div class="bottom_nev">
    	<?php $next = get_permalink(get_adjacent_post(false,'',false)); ?>
		<a href="<?php echo $next; ?>">
			<div class="bottom_next">
				<?php $nextPost = get_next_post(true);
				if($nextPost) { ?>
				<?php $nextthumbnail = wp_get_attachment_image_src( get_post_thumbnail_id($nextPost->ID), 'full' ); ?>
					<div class="bottom_next_thumb" style="background-image: url('<?php echo $nextthumbnail['0']; ?>')">
					</div>
				<p class="bottom_next_txt"><?php echo $nextPost->post_title; } ?></p>
			</div>
        </a>
    	<?php $prev = get_permalink(get_adjacent_post(false,'',true)); ?>
		<a href="<?php echo $prev; ?>">
			<div class="bottom_prev">
				<?php $prevPost = get_previous_post(true);
				if($prevPost) { ?>
				<?php $prevthumbnail = wp_get_attachment_image_src( get_post_thumbnail_id($prevPost->ID), 'full' ); ?>
					<div class="bottom_prev_thumb" style="background-image: url('<?php echo $prevthumbnail['0']; ?>')">
					</div>
				<p class="bottom_prev_txt"><?php echo $prevPost->post_title; } ?></p>
			</div>
        </a>
	</div><!-- bottom_nev -->
</div><!-- single_main -->
<?php get_footer(); ?>