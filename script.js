const serviceData = {
  bins: {
    icon: '🗑️',
    iconBg: '#fef3c7',
    title: 'Bins Cleaning',
    desc: "Nobody wants to deal with a smelly, grimy bin — that's where we come in. We pressure wash the interior and exterior of your trash and recycling bins, killing bacteria, removing built-up residue, and eliminating odors. We use eco-friendly, biodegradable cleaning agents that are safe for your family, pets, and the environment. Service is available on a one-time or recurring basis.",
    stars: '★★★★★',
    review: '"I didn\'t realize how bad my bins smelled until Fresh Wash cleaned them. Night and day difference. Signed up for monthly right away."',
    author: '— Jamie R., Homeowner'
  },
  patio: {
    icon: '🪨',
    iconBg: '#dbeafe',
    title: 'Patio Cleaning',
    desc: "Over time, patios collect dirt, algae, moss, and stains that make them look years older than they are. We use professional-grade pressure washing calibrated for your surface — whether it's concrete, pavers, brick, flagstone, or composite decking. We pre-treat tough stains and seal edges carefully so your landscaping stays untouched. The result is a patio that looks freshly poured.",
    stars: '★★★★★',
    review: '"Our patio went from embarrassing to the best part of our backyard. Neighbors have already asked for their number."',
    author: '— Marcus T., Homeowner'
  },
  siding: {
    icon: '🏠',
    iconBg: '#d1fae5',
    title: 'Siding Cleaning',
    desc: "Dirty siding doesn't just look bad — it can actually damage your home over time. Mold, mildew, and algae eat away at surfaces and hurt curb appeal. We use a soft wash system (low pressure + professional cleaning solution) that safely removes buildup from vinyl, wood, fiber cement, stucco, and brick without the risk of high-pressure damage.",
    stars: '★★★★★',
    review: '"Honestly thought we needed to repaint. Turns out we just needed a wash. House looks 10 years younger. These guys are legit."',
    author: '— Dana K., Homeowner'
  }
};

function openModal(service) {
  const d = serviceData[service];
  document.getElementById('modalIcon').textContent = d.icon;
  document.getElementById('modalIcon').style.background = d.iconBg;
  document.getElementById('modalTitle').textContent = d.title;
  document.getElementById('modalDesc').textContent = d.desc;
  document.getElementById('modalStars').textContent = d.stars;
  document.getElementById('modalReview').textContent = d.review;
  document.getElementById('modalAuthor').textContent = d.author;
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
      btn.textContent = '📋 Copy';
    }, 2000);
  });
}