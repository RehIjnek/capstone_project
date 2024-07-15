import random
from datetime import datetime, timedelta, date
import json
from flask import Flask, jsonify

NUM_ROWS = 2
TEAM_SIZES = [5, 10, 15, 20]
BUDGET_SIZES = [100, 1000, 10000]
PROJECT_DURATIONS = [1, 2, 3, 5, 8, 13]

def generate_data():
    projects = []

    for i in range(NUM_ROWS):
        project = {
            "projId": i,
            "teamSize": random.choice(TEAM_SIZES),
            "budget": random.choice(BUDGET_SIZES),
            "workload": 0,
            "completionTime": "-",
            "tasks": []
        }
        latest_date = date.today()
        for j in range(random.choice([1, 2, 3, 4])):
            duration_estimate = random.choice(PROJECT_DURATIONS)
            end_date = date.today() + timedelta(days=duration_estimate+1)
            latest_date = end_date if end_date > latest_date else latest_date              
            task = {
                "taskId": j,
                "description": random.choice(["Create", "Read", "Update", "Delete"]),
                "completeStatus": False,
                "personAssigned": random.choice(["Abby", "Bill", "Carolyn", "Darrel"]),
                "dueDate": end_date.isoformat(),
                "estimatedDuration": duration_estimate
            }
            project["workload"] += task["estimatedDuration"]
            project["tasks"].append(task)
        project["completionTime"] = latest_date.isoformat()
        projects.append(project)

    return projects

json_obj = json.dumps(generate_data(), indent=4)

fileTitle = "generated" + str(NUM_ROWS) + ".json"
with open(fileTitle, "w") as outfile:
    outfile.write(json_obj)

# app = Flask(__name__)
# @app.route('http://localhost:4000/api/projects', methods=['POST'])
# def update_projects():
#     return generate_data()

# if __name__ == '__main__':
#     app.run(debug=True)
