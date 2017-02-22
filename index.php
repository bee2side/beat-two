<?php get_header(); ?>
<div id="index_main">
	<div id="index_content">
		<?php if ( have_posts() ) : while (have_posts()) : the_post(); ?>
			<article class="home_article">
				<?php $thumb = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' ); ?>
				<a href="<?php the_permalink(); ?>" class="index_article_thumb_link">
					<div class="index_article_thumb" style="background-image: url('<?php echo $thumb['0']; ?>')">
					</div>
				</a>
				<a href="<?php the_permalink(); ?>" class="index_article_title">
					<?php the_title(); ?>
				</a>
				<span class="index_article_info">
					<?php the_category('&nbsp;&nbsp;&nbsp;&nbsp;∙&nbsp;&nbsp;&nbsp;&nbsp;'); ?>
				</span>
			</article>
		<?php endwhile; else: ?>
			<h2>Sorry!</h2>
		<?php endif; ?>
	</div>
</div>
<?php get_footer(); ?>