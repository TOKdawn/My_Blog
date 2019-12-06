<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>

<div class="footer">
    <div class="layui-col-md12 t-copy">
        <span class="layui-breadcrumb">
            <span>&copy; <?php echo date('Y'); ?> <a href="<?php $this->options->siteUrl(); ?>"><?php $this->options->title(); ?></a> <a href="http://creativecommons.org/licenses/by-nc/4.0/deed.zh"><i class="icon-cc"></i>CC-BY-NC-4.0</a></span>
            <span class="layui-hide-xs">Poweed by <a href="http://typecho.org/" target="_blank" rel="nofollow">Typecho</a></span>
            <span>Theme by <a href="https://www.echo.so" target="_blank">Echo</a></span>
            <span>remould by <a href="https://www.dawninshadow.com" target="_blank">TOKDawn</a></span>
        </span>
    </div>
</div>

<?php $this->footer(); ?>
</body>
</html>
