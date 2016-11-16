{
  'targets': [
    {
      'target_name': '<(module_name)',
      'win_delay_load_hook': 'true',
      'include_dirs': [
        "<!(node -e \"require('nan')\")"
      ],
      'sources': [
        'src/heapdiff.cc',
        'src/init.cc',
        'src/memwatch.cc',
        'src/util.cc'
      ]
    },
         {
           "target_name": "action_after_build",
           "type": "none",
           "dependencies": [ "<(module_name)" ],
           "copies": [
             {
               "files": [ "<(PRODUCT_DIR)/<(module_name).node" ],
               "destination": "<(module_path)"
             }
           ]
         }
  ]
}
