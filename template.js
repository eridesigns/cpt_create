'use strict';

// Basic template description.
exports.description = 'Create a new custom post type';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'Custom post type is ready. Now go to functions.php and link the custom post type so it can show in the dashboard';
				 
// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    {
      name: 'cpt_unique_name',
      message: 'Custom Post Type Name:',
      validator: /^[\w\-\.]+$/,
      warning: 'Must be only lowercase letters, numbers, dashes, dots or underscores.',
      default: 'my_custom_post_type'
    },
    {
      name: 'prefix',
      message: 'PHP Prefix:',
      validator: /^[\w\-\.]+$/,
      warning: 'Must be only letters, numbers, dashes, dots or underscores.',
      default: 'eri'
    },
	init.prompt( 'cpt_name'),
	init.prompt( 'singular_name'),
	init.prompt( 'add_new'),
	init.prompt( 'add_new_item'),
	init.prompt( 'edit_item'),
	init.prompt( 'new_item'),
	init.prompt( 'not_found'),
	init.prompt( 'not_found_in_trash'),
	init.prompt( 'menu_name'),
	init.prompt( 'has_archive'),
	init.prompt( 'query_var'),
	init.prompt( 'rewrite')
	
  ], function(err, props) {

    props.keywords = [];
    
	//renaming the cpt.php file to your unique cpt name
   	props.cpt_unique_name = props.cpt_unique_name.replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
   	//making sure that the preffix is lowercase
   	props.prefix = props.prefix.replace('/[^a-z_]/i', '').toLowerCase();
   	//making sure that the cpt.php file is lowercase
   	props.cpt_unique_name = props.cpt_unique_name.replace('/[^a-z_]/i', '').toLowerCase();

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Getting files to your choosen directory
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};