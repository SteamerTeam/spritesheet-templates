exports.singleSprite = {
  sprites: [{
    name: 'sprite-dash-case', x: 0, y: 0, width: 10, height: 20
  }],
  spritesheet: {
    width: 10, height: 20, image: 'nested/dir/spritesheet.png'
  }
};

exports.multipleSprites = {
  sprites: [{
    name: 'sprite-dash-case', x: 0, y: 0, width: 10, height: 20
  }, {
    name: 'sprite_snake_case', x: 10, y: 20, width: 20, height: 30
  }, {
    name: 'spriteCamelCase', x: 30, y: 50, width: 50, height: 50
  }],
  spritesheet: {
    width: 80, height: 100, image: 'nested/dir/spritesheet.png'
  }
};

exports.retinaMultipleSprites = {
  sprites: [{
    name: 'sprite-dash-case-normal', x: 0, y: 0, width: 10, height: 20
  }, {
    name: 'sprite_snake_case_normal', x: 10, y: 20, width: 20, height: 30
  }, {
    name: 'spriteCamelCaseNormal', x: 30, y: 50, width: 50, height: 50
  }],
  spritesheet: {
    width: 80, height: 100, image: 'nested/dir/spritesheet.png'
  },
  retinaSprites: [{
    name: 'sprite-dash-case-retina', x: 0, y: 0, width: 20, height: 40
  }, {
    name: 'sprite_snake_case_retina', x: 20, y: 40, width: 40, height: 60
  }, {
    name: 'spriteCamelCaseRetina', x: 60, y: 100, width: 100, height: 100
  }],
  retinaSpritesheet: {
    width: 160, height: 200, image: 'nested/dir/spritesheet-retina.png'
  },
  // TODO: Should we make an object or a side-object like `info`?
  // TODO: Add back name somehow
  retinaGroups: {
    groups: [{
      name: 'sprite-dash-case',
      normal: {name: 'sprite-dash-case-normal'},
      retina: {name: 'sprite-dash-case-retina'}
    }, {
      name: 'sprite_snake_case',
      normal: {name: 'sprite_snake_case_normal'},
      retina: {name: 'sprite_snake_case_retina'}
    }, {
      name: 'spriteCamelCase',
      normal: {name: 'spriteCamelCaseNormal'},
      retina: {name: 'spriteCamelCaseRetina'}
    }]
  }
};
