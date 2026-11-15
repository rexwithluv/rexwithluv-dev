<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { hardSkills, softSkills } from '$lib/data/skills';
	import NextPage from '$lib/next-page.svelte';
	import PageHeader from '$lib/page-header.svelte';
</script>

<svelte:head>
	<title>skills · rexwithluv.dev</title>
</svelte:head>

<PageHeader index={3} title={$_('navbar.skills')} />

<div class="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
	<div class="space-y-10">
		{#each hardSkills as group}
			<section>
				<h2 class="eyebrow mb-4">{group.category}</h2>
				<ul class="flex flex-wrap gap-2.5">
					{#each group.skills.toSorted((a, b) => a.name.localeCompare(b.name)) as skill}
						<li>
							<a
								href={skill.url}
								target="_blank"
								rel="noopener noreferrer"
								title={$_('learn-more', { values: { skill: skill.name } })}
								class="block border border-ink px-3 py-1.5 text-sm transition-colors hover:border-[var(--accent-bg)] hover:bg-[var(--accent-bg)] hover:text-[var(--accent-on)]"
							>
								{skill.name}
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>

	<section class="card self-start p-6 md:p-8">
		<h2 class="eyebrow mb-6">soft skills</h2>
		<ol class="space-y-6">
			{#each softSkills as skill, i}
				<li class="grid grid-cols-[2rem_1fr] gap-2">
					<span class="accent text-sm">{String(i + 1).padStart(2, '0')}</span>
					<div>
						<h3 class="font-bold">{$_(`soft-skills.${skill}.title`)}</h3>
						<p class="mt-1 text-sm leading-relaxed text-ink-soft">
							{$_(`soft-skills.${skill}.desc`)}
						</p>
					</div>
				</li>
			{/each}
		</ol>
	</section>
</div>

<NextPage />
