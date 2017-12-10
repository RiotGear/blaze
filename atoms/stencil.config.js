exports.config = {
  namespace: 'blaze-atoms',
  generateDistribution: true,
  bundles: [
    {
      components: ['demo-app']
    },
    {
      components: [
        'blaze-accordion',
        'blaze-accordion-pane',
        'blaze-alert',
        'blaze-address',
        'blaze-address-heading',
        'blaze-avatar',
        'blaze-breadcrumbs',
        'blaze-breadcrumb',
        'blaze-card',
        'blaze-image'
      ]
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
