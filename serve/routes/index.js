const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Work-Bench',
        tamplate: 'ArtTemplate'
    })
})

module.exports = router
