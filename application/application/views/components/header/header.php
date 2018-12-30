<?php
$classes = array();
if (!isset($static) || !$static) {
	$classes[] = 'sticky';
}
?>
<header<?php
	if (count($classes)>0)
		echo ' class="'.implode(' ', $classes).'"';
?>>
	<div class="container">
		<a class="icon logo" title="Site du Parti Pirate" href="https://partipirate.org">Parti Pirate</a>

		<div class="menu">
			<a class="has-icon icon-programme" href="<?php echo base_url('programme'); ?>">Notre programme</a>
			<a>Hello World</a>
			<a>lorem ipsum</a>
			<a>Hello World</a>
		</div>

	</div>
</header>