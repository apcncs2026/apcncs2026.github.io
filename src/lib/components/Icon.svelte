<script lang="ts">
	// Common icons from Lucide
	import { 
		MapPin, 
		Menu, 
		Calendar, 
		Clock, 
		Users, 
		Mail, 
		Phone,
		ExternalLink,
		FileText,
		Award,
		Building,
		Presentation,
		AlertTriangle,
		Info,
		Download,
		Smartphone,
		Check,
		CheckCircle,
		Book,
		MessageCircle,
		Grid3X3,
		ShoppingBag
	} from 'lucide-svelte';

	export let name: string;
	export let class_: string = "w-5 h-5";
	export let color: string = "currentColor";

	const icons: Record<string, any> = {
		'map-pin': MapPin,
		'menu': Menu,
		'calendar': Calendar,
		'clock': Clock,
		'users': Users,
		'mail': Mail,
		'phone': Phone,
		'external-link': ExternalLink,
		'file-text': FileText,
		'award': Award,
		'building': Building,
		'presentation': Presentation,
		'alert-triangle': AlertTriangle,
		'info': Info,
		'download': Download,
		'smartphone': Smartphone,
		'check': Check,
		'check-circle': CheckCircle,
		'book': Book,
		'message-circle': MessageCircle,
		'grid': Grid3X3,
		'shopping-bag': ShoppingBag
	};

	$: IconComponent = icons[name];
</script>

{#if IconComponent}
	<IconComponent class={class_} {color} />
{:else}
	<!-- Fallback for unknown icons -->
	<div class={class_} style="background-color: {color}; border-radius: 2px;"></div>
{/if}