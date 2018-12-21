<template>
	<div>
		<eheader></eheader>
		<econtent></econtent>
		<efooter></efooter>
	</div>
	
</template>

<script>
	import eheader from "@/components/eheader"
	import econtent from "@/components/econtent"
	import efooter from "@/components/efooter"

	export default{
		name:'elayout',
		components:{
			eheader,
			efooter,
			econtent
		}
	}
</script>

<style>
</style>