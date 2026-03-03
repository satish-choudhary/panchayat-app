const villageProgress = [
  { task: 'Road Repair - Main Street', progress: 80 },
  { task: 'Water Tank Renovation', progress: 60 },
  { task: 'Solar Street Lights Installation', progress: 45 },
  { task: 'Village Cleanliness Drive', progress: 70 },
]

const notifications = [
  'Gram Sabha meeting on 12th March at Community Hall.',
  'Last date for old-age pension verification: 20th March.',
  'Health camp by district hospital on 15th March.',
]

const members = [
  { name: 'Smt. Kavita Devi', role: 'Sarpanch', contact: '98765 12340' },
  { name: 'Shri Ramesh Lal', role: 'Up-Sarpanch', contact: '98765 12341' },
  { name: 'Smt. Meena Bai', role: 'Ward Member', contact: '98765 12342' },
  { name: 'Shri Dinesh Patel', role: 'Ward Member', contact: '98765 12343' },
]

const bplFamilies = [
  'Ram Prasad Family',
  'Sohan Lal Family',
  'Gita Bai Family',
  'Rukmini Family',
]

const aplFamilies = [
  'Mahesh Verma Family',
  'Sunita Sharma Family',
  'Vijay Singh Family',
  'Rekha Mishra Family',
]

const latestWorks = [
  'Completed drainage line near market area.',
  'Repaired handpumps in Wards 2 and 4.',
  'Distributed saplings under green village campaign.',
]

const proposedWorks = [
  'Construction of digital library room.',
  'New anganwadi building in Ward 3.',
  'Rainwater harvesting setup for school campus.',
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>Village Panchayat Portal</h1>
        <p>Progress, transparency, and development updates for every resident.</p>
      </header>

      <main className="grid">
        <section className="card">
          <h2>Village Progress</h2>
          {villageProgress.map((item) => (
            <div key={item.task} className="progressItem">
              <div className="labelRow">
                <span>{item.task}</span>
                <strong>{item.progress}%</strong>
              </div>
              <div className="progressBar">
                <div style={{ width: `${item.progress}%` }} className="progressFill" />
              </div>
            </div>
          ))}
        </section>

        <section className="card">
          <h2>Panchayat Notifications</h2>
          <ul>
            {notifications.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>

        <section className="card donation">
          <h2>Donation Box</h2>
          <p>Support village development projects with voluntary contributions.</p>
          <button type="button">Donate Now</button>
        </section>

        <section className="card">
          <h2>Panchayat Member Details</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.name}>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                  <td>{member.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="card">
          <h2>BPL Families</h2>
          <ul>
            {bplFamilies.map((family) => (
              <li key={family}>{family}</li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>APL Families</h2>
          <ul>
            {aplFamilies.map((family) => (
              <li key={family}>{family}</li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>Panchayat Latest Works</h2>
          <ul>
            {latestWorks.map((work) => (
              <li key={work}>{work}</li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>Proposal Work List</h2>
          <ul>
            {proposedWorks.map((work) => (
              <li key={work}>{work}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
