import Axios from "axios";
// export const blankClassroom = [
//   {
//     name: 'Student 1',
//     participantId: false,
//     isHandRaised: false,
//     isCalledOn: false,
//   },
//   {
//     name: 'Student 2',
//     participantId: false,
//     isHandRaised: false,
//     isCalledOn: false,
//   },
//   {
//     name: 'Student 3',
//     participantId: false,
//     isHandRaised: false,
//     isCalledOn: false,
//   },
//   {
//     name: 'Student 4',
//     participantId: false,
//     isHandRaised: false,
//     isCalledOn: false,
//   },
//   {
//     name: 'Student 5',
//     participantId: false,
//     isHandRaised: false,
//     isCalledOn: false,
//   },
//   {
//     name: 'Student 6',
//     participantId: false,
//     isHandRaised: false,
//     isCalledOn: false,
//   },
// ];
let blankClassroom=[];

Axios.get("https://obsidian-backend.herokuapp.com/student/allStudents")
	.then((res) => {
		res.data.response.map((student) => (
			blankClassroom.push(
				{
					name: student.name,
					participantId: false,
					isHandRaised: false,
					isCalledOn: false
				}
			)
		))
	})

export { blankClassroom };
