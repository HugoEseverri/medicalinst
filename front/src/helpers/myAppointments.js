const appointments = [
	{
		id: 1,
		date: '2024-10-25',
		time: '10:00 AM',
		userId: 101,
		status: 'confirmed',
		user: {
			name: 'Juan Pérez',
			email: 'juan.perez@example.com'
		}
	},
	{
		id: 2,
		date: '2024-10-26',
		time: '11:30 AM',
		userId: 102,
		status: 'pending',
		user: {
			name: 'Ana López',
			email: 'ana.lopez@example.com'
		}
	},
	{
		id: 3,
		date: '2024-10-27',
		time: '2:00 PM',
		userId: 103,
		status: 'cancelled',
		user: {
			name: 'Carlos Gómez',
			email: 'carlos.gomez@example.com'
		}
	}
]

export default appointments;