<?php
function init_{%= preffix %}_{%= cpt_unique_name %}(){

	register_post_type( '{%= cpt_unique_name %}',

		array(
			'labels' => array(

				'name'			=> '{%= singular_name %}',
				'singular_name' => '{%= singular_name %}',
				'add_new'		=> '{%= add_new %}',
				'add_new_item'	=> '{%= add_new_item %}',
				'edit_item'		=> '{%= edit_item %}',
				'new_item'		=> '{%= new_item %}',
				'not_found'		=> '{%= not_found %}',
				'not_found_in_trash' => '{%= not_found_in_trash %}',
				'menu_name'		=> '{%= menu_name %}',

			),

			'description' => __(''),
			'public' => true,
			'show_in_nav_menus' => true,

			'supports' => array(
				'title',
				'thumbnail',
				'page-attributes',
				'editor',
				'excerpt',
				'comments',
				'custom-fields',
			),

			'show_ui' => true,
			'show_in_menu' => true,
			'has_archive' => '{%= has_archive %}',
			'query_var' => '{%= query_var %}',
			//'menu_icon' => get_template_directory_uri().'/images/team.png',
			'rewrite' => array('slug' => '{%= rewrite %}'),
		)
	);

	flush_rewrite_rules(); // this one fixes the 404 error
}

add_action( 'init', 'init_{%= preffix %}_{%= cpt_unique_name %}');
?>