<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="UTF-8">
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<title><?php bloginfo('name'); ?> <?php wp_title('|'); ?></title>
<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/indexControl.js"></script>
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
		<div id="container">
			<div id="header">
				<div class="menu_normal">
					<a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a>
					<span class="menubtn"></span>
				</div>
				<div class="menu_open">
				</div>
			</div>