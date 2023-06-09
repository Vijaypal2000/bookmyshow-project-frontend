import React from 'react'

const TimeSlotSelection = (props) => {
    const {myShow,setMyShow}=props;

    
	const timeSlot = ["10:00 AM", "1:00 PM", "3:00 PM", "8:00 PM"];

    const setTimeSlot = (e) => {
			setMyShow({ ...myShow, slot: e.target.innerHTML });
		};

  return (
		<div className="container_item time_slot">
			<span className="container_item_heading"> Select a Time Slot :</span>
			<div className="list">
				{timeSlot.map((time, i) => (
					<div
						key={i}
						className="option"
						style={
							myShow.slot === time
								? {
										backgroundColor: "#3CC47C",
										color: "black",
										borderColor: "#3CC47C",
								  }
								: {}
						}
						onClick={setTimeSlot}>
						{time}
					</div>
				))}
			</div>
		</div>
	);
}

export default TimeSlotSelection