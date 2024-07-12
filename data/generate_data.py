import random
from datetime import datetime, timedelta
import json

NUM_ROWS = 1000

# task attributes
DESCRIPTION = "Sample Description"
COMPLETE_STATUS = False
PERSON_ASSIGNED = "Sample Person Assigned"
DUE_DATE = "Sample Due Date"
ESTIMATED_DURATION = [1, 2, 3, 5, 8, 13]

# project attributes
TEAM_
BUDGETS = [10, 100, 1000, 10000]
WORKLOADS = [1, 2, 3, 5, 8, 13]




# def generate_data():
#     projects = []

#     for i in range(NUM_ROWS):


#     return projects
    # # Define the project template
    # project_template = {
    #     "proj_id": {
    #         "size": "Large",
    #         "color": "Yellow",
    #         "pattern": "Plain",
    #         "material": "Bamboo",
    #         "condition": "Used",
    #         "forFoot": "Both"
    #     },
    #     "additionalFeatures": {
    #         "waterResistant": False,
    #         "padded": False,
    #         "antiBacterial": True
    #     },
    #     "addedTimestamp": datetime.now().isoformat()
    # }

    # # Create a list of three socks based on the template
    # socks = [sock_template.copy() for _ in range(num_sock)]

    # # Assign a unique timestamp to each sock
    # for sock in socks:
    #     sock['addedTimestamp'] = datetime.now().isoformat()

    # return socks