module.exports = {
    plugins: [
        require('postcss-import'),
        // require('postcss-unprefix'),
        require('autoprefixer'),
        // require("postcss-remove-rules")(
        //     {
        //         rulesToRemove: {
        //             "html": "text-size-adjust"
        //         }
        //     }
        // )
    ]
}
