import random
from datetime import datetime, timedelta, date
import json

NUM_ROWS = 1000
TEAM_SIZES = [5, 10, 15, 20]
BUDGET_SIZES = [100, 1000, 10000]
WORKLOADS = ["light", "moderate", "heavy"]
PROJECT_DURATIONS = [1, 2, 3, 5, 8, 13]

def generate_data():
    projects = []

    for i in range(NUM_ROWS):
        project = {
            "projId": i,
            "teamSize": random.choice(TEAM_SIZES),
            "budget": random.choice(BUDGET_SIZES),
            "workload": random.choice(WORKLOADS),
            "completionTime": 0,
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
            project["completionTime"] += task["estimatedDuration"]
            project["tasks"].append(task)
        projects.append(project)

    return projects

json_obj = json.dumps(generate_data(), indent=4)

fileTitle = "generated" + str(NUM_ROWS) + ".json"
with open(fileTitle, "w") as outfile:
    outfile.write(json_obj)