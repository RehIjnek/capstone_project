import random
from datetime import datetime, timedelta
import json
from flask import Flask, jsonify

NUM_ROWS = 1

def generate_data():
    projects = []

    for i in range(NUM_ROWS):
        project = {
            "projId": i,
            "teamSize": random.choice([5, 10, 15, 20]),
            "budget": random.choice([100, 1000, 10000]),
            "workload": 0,
            "completionTime": "-",
            "tasks": []
        }
        
        for j in range(random.choice([1, 2, 3, 4])):
            task = {
                "taskId": j,
                "description": random.choice(["Create", "Read", "Update", "Delete"]),
                "completeStatus": False,
                "personAssigned": random.choice(["Abby", "Bill", "Carolyn", "Darrel"]),
                "dueDate": datetime.now().isoformat(),
                "estimatedDuration": random.choice([1, 2, 3, 5, 8, 13])
            }
            project["workload"] += task["estimatedDuration"]
            project["tasks"] += task
        
        projects.append(project)

    return projects

app = Flask(__name__)
@app.route('http://localhost:3000/api/projects', methods=['POST'])
def update_projects():
    return 

if __name__ == '__main__':
    app.run(debug=True)
