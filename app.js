const projects = [
  { village: 'Rampur', work: 'Road Repair', status: 'In Progress', progress: 60, budget: 200000 },
  { village: 'Devnagar', work: 'Water Tank', status: 'Planned', progress: 10, budget: 350000 },
  { village: 'Lakshmipur', work: 'Street Lighting', status: 'Completed', progress: 100, budget: 150000 },
  { village: 'Sitapur', work: 'Drainage Upgrade', status: 'In Progress', progress: 40, budget: 280000 }
];

const tableBody = document.querySelector('#work-table');
const template = document.querySelector('#row-template');
const searchInput = document.querySelector('#search');

function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(amount);
}

function renderStats(items) {
  document.querySelector('#total-projects').textContent = String(items.length);

  const completed = items.filter((project) => project.status === 'Completed').length;
  document.querySelector('#completed-projects').textContent = String(completed);

  const utilized = items.reduce((sum, project) => sum + Math.round((project.budget * project.progress) / 100), 0);
  document.querySelector('#budget-utilized').textContent = `₹${formatINR(utilized)}`;
}

function renderRows(items) {
  tableBody.textContent = '';

  items.forEach((project) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector('.village').textContent = project.village;
    fragment.querySelector('.work').textContent = project.work;

    const statusSelect = fragment.querySelector('.status');
    statusSelect.value = project.status;
    statusSelect.addEventListener('change', (event) => {
      project.status = event.target.value;
      if (project.status === 'Completed') {
        project.progress = 100;
      }
      refresh();
    });

    const progressInput = fragment.querySelector('.progress');
    const progressLabel = fragment.querySelector('.progress-label');

    progressInput.value = String(project.progress);
    progressLabel.textContent = `${project.progress}%`;

    progressInput.addEventListener('input', (event) => {
      const value = Number(event.target.value);
      project.progress = value;
      progressLabel.textContent = `${value}%`;
      if (value === 100) {
        project.status = 'Completed';
        statusSelect.value = 'Completed';
      } else if (project.status === 'Completed') {
        project.status = 'In Progress';
        statusSelect.value = 'In Progress';
      }
      renderStats(projects);
    });

    fragment.querySelector('.budget').textContent = formatINR(project.budget);

    tableBody.appendChild(fragment);
  });
}

function refresh() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = projects.filter((project) => {
    return project.village.toLowerCase().includes(query) || project.work.toLowerCase().includes(query);
  });

  renderRows(filtered);
  renderStats(projects);
}

searchInput.addEventListener('input', refresh);
refresh();
