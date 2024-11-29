<?php
function register_my_block(): void
{
    register_block_type( block_type: dirname(path: __FILE__) . '/src/blocks/my-block/build/block.json' );
}
add_action(hook_name: 'init', callback: 'register_my_block');



function custom_block_category( $categories ): array {
    return array_merge(
         array(
            array(
                'slug'  => 'afp-category',
                'title' => __( text: 'AFP Blocks', domain: 'AFP' ),
                'icon'  => 'star-filled',
            ),
            $categories,
        )
    );
}
add_filter( hook_name: 'block_categories_all', callback: 'custom_block_category', priority: 10, accepted_args: 2 );