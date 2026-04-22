const serviceData = {
  bins: {
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>',
    iconBg: '#fef3c7',
    iconColor: '#d97706',
    title: 'Bins Cleaning',
    desc: "Nobody wants to deal with a smelly, grimy bin — that's where we come in. We pressure wash the interior and exterior of your trash and recycling bins, killing bacteria, removing built-up residue, and eliminating odors. Available as a one-time clean or on a recurring schedule.",
    stars: '★★★★★',
    review: '"I didn\'t realize how bad my bins smelled until Fresh Wash cleaned them. Night and day difference. Signed up for monthly right away."',
    author: '— Jamie R., Homeowner',
    beforeImg: 'https://placehold.co/360x200/e2e5eb/8b93a3?text=Before',
    afterImg:  'https://placehold.co/360x200/e6faf4/059669?text=After'
  },
  patio: {
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>',
    iconBg: '#dbeafe',
    iconColor: '#1a6bff',
    title: 'Patio Cleaning',
    desc: "Over time, patios collect dirt, algae, moss, and stains that make them look years older than they are. We use professional-grade pressure washing calibrated for your surface — whether it's concrete, pavers, brick, flagstone, or composite decking. We pre-treat tough stains and seal edges carefully so your landscaping stays untouched. The result is a patio that looks freshly poured.",
    stars: '★★★★★',
    review: '"Our patio went from embarrassing to the best part of our backyard. Neighbors have already asked for their number."',
    author: '— Marcus T., Homeowner',
    beforeImg: 'https://placehold.co/360x200/e2e5eb/8b93a3?text=Before',
    afterImg:  'https://placehold.co/360x200/e6faf4/059669?text=After'
  },
  siding: {
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    iconBg: '#d1fae5',
    iconColor: '#059669',
    title: 'Siding Cleaning',
    desc: "Dirty siding doesn't just look bad — it can actually damage your home over time. Mold, mildew, and algae eat away at surfaces and hurt curb appeal. We use a soft wash system (low pressure + professional cleaning solution) that safely removes buildup from vinyl, wood, fiber cement, stucco, and brick without the risk of high-pressure damage.",
    stars: '★★★★★',
    review: '"Honestly thought we needed to repaint. Turns out we just needed a wash. House looks 10 years younger. These guys are legit."',
    author: '— Dana K., Homeowner',
    beforeImg: 'https://placehold.co/360x200/e2e5eb/8b93a3?text=Before',
    afterImg:  'https://placehold.co/360x200/e6faf4/059669?text=After'
  }
};

function openModal(service) {
  const d = serviceData[service];
  const iconEl = document.getElementById('modalIcon');
  iconEl.innerHTML = d.iconSvg;
  iconEl.style.background = d.iconBg;
  iconEl.style.color = d.iconColor;
  document.getElementById('modalTitle').textContent = d.title;
  document.getElementById('modalDesc').textContent = d.desc;
  document.getElementById('modalStars').textContent = d.stars;
  document.getElementById('modalReview').textContent = d.review;
  document.getElementById('modalAuthor').textContent = d.author;
  document.getElementById('modalBefore').src = d.beforeImg;
  document.getElementById('modalAfter').src  = d.afterImg;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

function toggleFaq(item) {
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

function toggleScript() {
  document.getElementById('scriptBox').classList.toggle('open');
}

function copyScript(btn) {
  const text = document.getElementById('scriptText').textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    btn.textContent = '✓ Copied!';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.textContent = 'Copy';
    }, 2000);
  });
}